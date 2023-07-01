import BlogPost from '@/models/BlogPost'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  try {
    await connect()
    const posts = await BlogPost.find()
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (err) {
    return new NextResponse(err, { status: 500 })
  }
}
