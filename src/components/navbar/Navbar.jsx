import React from 'react'
import { data } from '@/utils/data'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      <Link href="/" className="text-2xl font-bold">
        {data.companyName}
      </Link>
      <div className="flex items-center gap-5">
        {data.navbarLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button className="p-1.5 border-none bg-accent text-text_dark font-medium cursor-pointer rounded-md">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
