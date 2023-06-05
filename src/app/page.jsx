import Image from 'next/image'
import BannerGif from '../../public/assets/images/BannerGif.gif'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['900'] })

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex flex-1 flex-col gap-12">
        <h1
          id="company-tagline"
          className={`text-7xl font-bold ${roboto.className}`}
        >
          Company Tagline Lorem, ipsum dolor.
        </h1>
        <p className="text-2xl font-light ">
          Company description Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <button className="p-5 cursor-pointer bg-accent text-text_dark font-bold border-none rounded-lg w-max">
          See what we do
        </button>
      </div>
      <div className="flex-1 mb-7">
        <Image
          src={BannerGif}
          alt="banner"
          className="w-full h-128 object-cover"
        ></Image>
      </div>
    </div>
  )
}
