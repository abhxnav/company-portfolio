import React from 'react'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { data } from '@/utils/data'

const About = () => {
  return (
    <div className="">
      <div className="w-full h-80 relative ">
        <Image
          src={data.about.banner}
          fill={true}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex gap-24 mb-10">
        <div className="flex flex-col flex-1 mt-12 gap-8">
          <h1 className="text-4xl font-extrabold text-text_light">
            {data.about.col1.title}
          </h1>
          {data.about.col1.content.map((para) => (
            <p className="text-lg font-light text-justify text-text_light">
              {para.para}
            </p>
          ))}
        </div>
        <div className="flex flex-col flex-1 mt-12 gap-8">
          <h1 className="text-4xl font-extrabold text-text_light">
            {data.about.col2.title}
          </h1>
          {data.about.col2.content.map((para) => (
            <p className="text-lg font-light text-justify text-text_light">
              {para.para}
            </p>
          ))}
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  )
}

export default About
