'use client'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const Dashboard = () => {
  const { mode } = useContext(ThemeContext)

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  )

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className="flex gap-24">
        <div className="flex-1">
          {isLoading
            ? 'Loading...'
            : data?.map((post) => (
                <div
                  className="flex items-center justify-between my-12"
                  key={post._id}
                >
                  <div className="w-52 h-28 relative">
                    <Image
                      className="object-cover"
                      src={post.img}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className="postTitle">{post.title}</h2>
                  <span className="cursor-pointer text-red-400">X</span>
                </div>
              ))}
        </div>
        <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Add new post</h1>
          <input
            type="text"
            placeholder="Title"
            className="p-3 bg-transparent border-2 border-gray-400 rounded-md text-gray-400 text-xl font-bold"
          />
          <input
            type="text"
            placeholder="Desc"
            className="p-3 bg-transparent border-2 border-gray-400 rounded-md text-gray-400 text-xl font-bold"
          />
          <input
            type="text"
            placeholder="Image"
            className="p-3 bg-transparent border-2 border-gray-400 rounded-md text-gray-400 text-xl font-bold"
          />
          <textarea
            placeholder="Content"
            className="p-3 bg-transparent border-2 border-gray-400 rounded-md text-gray-400 text-xl font-bold"
            cols="30"
            rows="10"
          ></textarea>
          <button
            className={`p-5 cursor-pointer  font-bold border-none rounded-lg min-w-full w-max ${
              mode === 'light'
                ? 'bg-accent_primary text-white'
                : 'bg-accent_secondary text-text_dark'
            }`}
          >
            Post
          </button>
        </form>
      </div>
    )
  }
}

export default Dashboard
