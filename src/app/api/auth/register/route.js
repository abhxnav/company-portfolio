import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import User from '@/models/User'

export const POST = async (req) => {
  const { name, email, password } = await req.json()
  const hashedPassword = await bcrypt.hash(password, 7)

  await connect()

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save()
    return new NextResponse('User created successfully!', { status: 201 })
  } catch (error) {
    return new NextResponse(error.message, { status: 500 })
  }
}
