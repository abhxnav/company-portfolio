'use client'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Dashboard = () => {
  const session = useSession()
  console.info(session)

  // const fetcher = (...args) => fetch(...args).then((res) => res.json())

  // const { data, mutate, error, isLoading } = useSWR(
  //   `/api/posts?username=${session?.data?.user.name}`,
  //   fetcher
  // )

  return <div>Dashboard</div>
}

export default Dashboard
