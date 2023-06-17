'use client'

import React, { useContext } from 'react'
import { data } from '@/utils/data'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { ThemeContext } from '@/context/ThemeContext'

const Navbar = () => {
  const { mode } = useContext(ThemeContext)
  return (
    <div className="flex justify-between items-center h-24">
      <Link
        href="/"
        className={`text-2xl font-bold ${
          mode === 'light' ? 'text-accent_primary' : 'text-accent_secondary'
        }`}
      >
        {data.home.companyName}
      </Link>
      <div className="flex items-center gap-5">
        <ThemeToggle />
        {data.home.navbarLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button
          className={`py-1.5 px-2 border-none font-medium cursor-pointer rounded-md ${
            mode === 'light'
              ? 'bg-accent_primary text-white'
              : 'bg-accent_secondary text-text_dark'
          }`}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
