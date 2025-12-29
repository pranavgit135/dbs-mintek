import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

// GET blog by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const blog = await Blog.findOne({ slug: params.slug, status: 'published' })

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: blog }, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching blog by slug:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog' },
      { status: 500 }
    )
  }
}

