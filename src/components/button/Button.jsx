import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="p-5 cursor-pointer bg-accent_secondary text-text_dark font-bold border-none rounded-lg w-max">
        {text}
      </button>
    </Link>
  )
}

export default Button
