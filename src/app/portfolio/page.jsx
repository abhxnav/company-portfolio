'use client'

import Link from 'next/link'
import app from '../../../public/assets/images/app-banner.gif'
import web from '../../../public/assets/images/web-banner.gif'
import Image from 'next/image'

const Portfoio = () => {
  return (
    <div className="">
      <h1 className="my-5 mx-0 text-text_light text-3xl font-bold">
        Choose a Gallery
      </h1>
      <div className="flex gap-12">
        <Link
          href="/portfolio/websites"
          className="border-4 border-gray-300 w-80 h-[25rem] relative cursor-pointer"
        >
          <Image src={web} fill className="opacity-80" />
          <div className="w-full h-full absolute bg-background opacity-0 hover:opacity-90 flex items-center justify-center smooth-transition">
            <span className="text-4xl font-bold text-text_light">Websites</span>
          </div>
        </Link>
        <Link
          href="/portfolio/applications"
          className="border-4 border-gray-300 w-80 h-[25rem] relative cursor-pointer"
        >
          <Image src={app} fill className="opacity-80" />
          <div className="w-full h-full absolute bg-background opacity-0 hover:opacity-90 flex items-center justify-center smooth-transition">
            <span className="text-4xl font-bold text-text_light">
              Applications
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Portfoio
