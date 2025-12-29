import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { otpStore, createSession } from '@/lib/auth-store'

const ADMIN_EMAIL = 'khandekarpranav52@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json()

    // Verify email is admin email
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized email address' },
        { status: 403 }
      )
    }

    // Get stored OTP
    const storedData = otpStore.get(email)

    if (!storedData) {
      return NextResponse.json(
        { success: false, error: 'No verification code found. Please request a new code.' },
        { status: 400 }
      )
    }

    // Check if OTP expired
    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(email)
      return NextResponse.json(
        { success: false, error: 'Verification code has expired. Please request a new code.' },
        { status: 400 }
      )
    }

    // Verify OTP
    if (storedData.code !== otp) {
      return NextResponse.json(
        { success: false, error: 'Invalid verification code' },
        { status: 400 }
      )
    }

    // OTP is valid - create session
    const sessionToken = createSession(email)

    // Store session in cookie
    const cookieStore = await cookies()
    cookieStore.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    })

    // Delete used OTP
    otpStore.delete(email)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Login successful',
        token: sessionToken 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error in verify-otp:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

