import BlogPost from '@/models/BlogPost'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  const { id } = params
  try {
    await connect()
    const post = await BlogPost.findById(id)
    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    return new NextResponse(err, { status: 500 })
  }
}
