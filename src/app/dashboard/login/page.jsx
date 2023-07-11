'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', { email, password })
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <form className="w-80 flex flex-col gap-5" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  )
}

export default Login
