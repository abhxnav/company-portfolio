import BlogPost from '@/models/BlogPost'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  const url = new URL(req.url)
  const username = url.searchParams.get('username')

  try {
    await connect()
    const posts = await BlogPost.find(username && { username })
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (err) {
    return new NextResponse(err, { status: 500 })
  }
}

export const POST = async (req) => {
  const body = await req.json()
  const newPost = new postMessage(body)

  try {
    await connect()
    await newPost.save()
    return new NextResponse('Post created successfully', { status: 201 })
  } catch (err) {
    return new NextResponse(err, { status: 500 })
  }
}
