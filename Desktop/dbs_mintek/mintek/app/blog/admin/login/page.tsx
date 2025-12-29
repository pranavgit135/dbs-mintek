'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Mail, 
  Lock, 
  ArrowLeft,
  Loader2,
  Shield
} from 'lucide-react'
import Link from 'next/link'

const ADMIN_EMAIL = 'khandekarpranav52@gmail.com'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage(result.message)
        setStep('otp')
        // In development, show OTP in console
        if (result.otp) {
          console.log('🔐 Development OTP:', result.otp)
        }
      } else {
        setError(result.error || 'Failed to send verification code')
      }
    } catch (error: any) {
      setError('Failed to send verification code. Please try again.')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    if (otp.length !== 4) {
      setError('Please enter a 4-digit code')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage('Login successful! Redirecting...')
        // Redirect to admin page after a short delay
        setTimeout(() => {
          router.push('/blog/admin')
        }, 1000)
      } else {
        setError(result.error || 'Invalid verification code')
        setOtp('')
      }
    } catch (error: any) {
      setError('Failed to verify code. Please try again.')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">
              Admin Login
            </CardTitle>
            <p className="text-white/70 text-sm mt-2">
              {step === 'email' 
                ? 'Enter your admin email to receive a verification code'
                : 'Enter the 4-digit code sent to your email'
              }
            </p>
          </CardHeader>

          <CardContent>
            {step === 'email' ? (
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Admin Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                    disabled
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl h-12"
                  />
                  <p className="text-white/50 text-xs">
                    Only authorized email addresses can access the admin panel
                  </p>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-200 px-4 py-3 rounded-xl text-sm">
                    {message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Code...
                    </div>
                  ) : (
                    'Send Verification Code'
                  )}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-white/90 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Verification Code
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                      setOtp(value)
                    }}
                    placeholder="0000"
                    maxLength={4}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl h-12 text-center text-2xl tracking-widest font-mono"
                  />
                  <p className="text-white/50 text-xs text-center">
                    Check your email for the 4-digit code
                  </p>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-200 px-4 py-3 rounded-xl text-sm">
                    {message}
                  </div>
                )}

                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={loading || otp.length !== 4}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Verifying...
                      </div>
                    ) : (
                      'Verify & Login'
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setStep('email')
                      setOtp('')
                      setError('')
                      setMessage('')
                    }}
                    className="w-full text-white/70 hover:text-white hover:bg-white/10 rounded-xl"
                  >
                    Back to Email
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-white/10">
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="w-full text-white/70 hover:text-white hover:bg-white/10 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

