import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySession } from '@/lib/auth-store'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (session && verifySession(session.value)) {
      return NextResponse.json(
        { 
          success: true, 
          authenticated: true,
          message: 'Session valid' 
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        authenticated: false,
        message: 'No valid session' 
      },
      { status: 401 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        authenticated: false,
        error: error.message || 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

