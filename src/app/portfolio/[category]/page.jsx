import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'
import { data } from '@/utils/data'

const Category = ({ params }) => {
  console.log(params)
  return (
    <div>
      <h1 className="text-accent_secondary font-semibold text-4xl">
        {params.category}
      </h1>
      {data.portfolio.map((project) => (
        <div className="portfolio-items flex gap-12 mt-12 mb-24">
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-5xl font-semibold">{project.title}</h1>
            <p className="text-xl">{project.desc}</p>
            <div className="flex flex-nowrap gap-2">
              {project.actionButtons.map((button) => (
                <Button text={button.text} url={button.url} />
              ))}
            </div>
          </div>
          <div className="imgContainer flex-1 h-128 relative">
            <Image fill={true} src={project.image} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
