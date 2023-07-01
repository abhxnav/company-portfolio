import Image from 'next/image'
import { data } from '@/utils/data'

// const getData = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: 'no-store',
//   })
//   if (!res.ok) {
//     return notFound()
//   }
//   return res.json()
// }

const BlogPost = async ({ params }) => {
  // const data = await getData(params.id)
  return (
    <div>
      <div className="flex">
        <div className="flex flex-1 flex-col justify-between">
          <h1 className="text-4xl font-semibold">{data.blog.title}</h1>
          <p className="text-lg font-light">{data.blog.desc}</p>
          <div className="flex items-center gap-3">
            <Image
              src={data.blog.author.avatar}
              width={40}
              height={40}
              className="circle"
            />
            <span className="username">{data.blog.author.name}</span>
          </div>
        </div>
        <div className="flex-1 h-80 relative">
          <Image src={data.blog.image} fill className="object-cover" />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-justify">
        <p className="text">{data.blog.text}</p>
      </div>
    </div>
  )
}

export default BlogPost
