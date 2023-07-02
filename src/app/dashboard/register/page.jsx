'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {
  const [err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      res.status === 201 &&
        router.push('/dashboard/login?success=Account created successfully')
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <form className="w-80 flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="p-5 bg-transparent border-2 border-text_light rounded-md text-xl font-bold text-text_light"
          required
        />
        <input
          type="email"
          placeholder="email"
          className="p-5 bg-transparent border-2 border-text_light rounded-md text-xl font-bold text-text_light"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="p-5 bg-transparent border-2 border-text_light rounded-md text-xl font-bold text-text_light"
          required
        />
        <button className="w-80 p-5 cursor-pointer bg-accent_secondary border-none rounded-md font-bold text-text_dark">
          Register
        </button>
      </form>
      {err && 'Something went wrong!'}
      <Link href="/dashboard/login">Login with and existing account</Link>
    </div>
  )
}

export default Register
