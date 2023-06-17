'use client'

import { ThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const Button = ({ text, url }) => {
  const { mode } = useContext(ThemeContext)
  return (
    <Link href={url}>
      <button
        className={`p-5 cursor-pointer  font-bold border-none rounded-lg min-w-full w-max ${
          mode === 'light'
            ? 'bg-accent_primary text-white'
            : 'bg-accent_secondary text-text_dark'
        }`}
      >
        {text}
      </button>
    </Link>
  )
}

export default Button
