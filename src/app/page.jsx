import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { data } from '@/utils/data'
import Button from '@/components/button/Button'

const roboto = Roboto({ subsets: ['latin'], weight: ['900'] })

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex flex-1 flex-col gap-12">
        <h1
          id="company-tagline"
          className={`text-7xl font-bold ${roboto.className}`}
        >
          {data.home.companyTagline}
        </h1>
        <p className="text-2xl font-light ">{data.home.comapnyDesc}</p>
        <Button url="/portfolio" text="See what we do" />
      </div>
      <div className="flex-1 mb-7">
        <Image
          src={data.home.banner}
          alt="banner"
          className="w-full h-128 object-cover bouncing_img"
        ></Image>
      </div>
    </div>
  )
}
