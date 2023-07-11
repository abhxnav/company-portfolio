'use client'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  if (session.status === 'authenticated') {
    return <div>Dashboard</div>
  }
  // const fetcher = (...args) => fetch(...args).then((res) => res.json())

  // const { data, mutate, error, isLoading } = useSWR(
  //   `/api/posts?username=${session?.data?.user.name}`,
  //   fetcher
  // )
}

export default Dashboard
