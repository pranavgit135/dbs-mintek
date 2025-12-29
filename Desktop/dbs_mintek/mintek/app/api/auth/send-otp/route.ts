import { NextRequest, NextResponse } from 'next/server'
import { otpStore } from '@/lib/auth-store'

const ADMIN_EMAIL = 'khandekarpranav52@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Verify email is admin email
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized email address' },
        { status: 403 }
      )
    }

    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString()
    const expiresAt = Date.now() + 10 * 60 * 1000 // 10 minutes

    // Store OTP
    otpStore.set(email, { code: otp, expiresAt })

    // Send OTP via email using Brevo
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { 
            name: 'Blog Admin', 
            email: 'khandekarpranav52@gmail.com' 
          },
          to: [{ email: ADMIN_EMAIL, name: 'Admin' }],
          subject: 'Admin Login Verification Code',
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
                <h1 style="color: white; margin: 0;">Admin Login Verification</h1>
              </div>
              <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Your verification code is:</p>
                <div style="background: #f0f0f0; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
                  <h2 style="font-size: 32px; color: #667eea; margin: 0; letter-spacing: 5px; font-weight: bold;">${otp}</h2>
                </div>
                <p style="font-size: 14px; color: #666; margin-top: 20px;">This code will expire in 10 minutes.</p>
                <p style="font-size: 12px; color: #999; margin-top: 20px;">If you didn't request this code, please ignore this email.</p>
              </div>
            </div>
          `,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Brevo API error:', errorData)
        
        // Check if it's an IP authorization error
        if (errorData.code === 'unauthorized' && errorData.message?.includes('IP address')) {
          return NextResponse.json(
            { 
              success: false, 
              error: 'IP address not authorized. Please add your IP to Brevo authorized IPs.',
              hint: 'Go to https://app.brevo.com/security/authorised_ips and add your IP address',
              details: errorData.message
            },
            { status: 500 }
          )
        }
        
        return NextResponse.json(
          { 
            success: false, 
            error: 'Failed to send verification email',
            details: errorData.message || 'Unknown error'
          },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { 
          success: true, 
          message: 'Verification code sent to your email',
          // In development, you might want to return the OTP for testing
          // Remove this in production!
          ...(process.env.NODE_ENV === 'development' && { otp })
        },
        { status: 200 }
      )
    } catch (error: any) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send verification email' },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Error in send-otp:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to check if OTP exists (for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Use POST to send OTP',
    storedOTPs: Array.from(otpStore.keys()),
  })
}

