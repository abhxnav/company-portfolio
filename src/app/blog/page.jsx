import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from '@/utils/data'

const Blog = () => {
  return (
    <div>
      {data.blogs.map((blog) => (
        <Link href="/blog/testId" className="flex items-center gap-12 mb-12">
          <div className="">
            <Image src={blog.image} width={1200} className="object-cover" />
          </div>
          <div className="content">
            <h1 className="text-3xl font-semibold mb-3">{blog.title}</h1>
            <pc className="text-lg">{blog.desc}</pc>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
