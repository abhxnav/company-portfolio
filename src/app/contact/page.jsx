'use client'

import Button from '@/components/button/Button'
import Image from 'next/image'
import { data } from '@/utils/data'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

const Contact = () => {
  const { mode } = useContext(ThemeContext)
  return (
    <div className="conatiner">
      <h1
        className={`text-6xl text-center mb-24 font-bold ${
          mode === 'light' ? 'text-accent_primary' : 'text-accent_secondary'
        }`}
      >
        {data.contact.title}
      </h1>
      <div className="flex items-center gap-24">
        <div className="flex-1 relative h-128 scale-125 mr-10">
          <Image
            src={data.contact.banner}
            alt=""
            fill={true}
            className="scaling_img"
            style={{ filter: 'grayscale(50%)' }}
          />
        </div>
        <form className="flex flex-col flex-1 gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-5 bg-transparent outline-none border-2 border-gray-300 text-xl font-bold"
          />
          <input
            type="text"
            placeholder="email"
            className="p-5 bg-transparent outline-none border-2 border-gray-300 text-xl font-bold"
          />
          <textarea
            className="p-5 bg-transparent outline-none border-2 border-gray-300 text-xl font-bold"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
