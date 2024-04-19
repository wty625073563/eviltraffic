/* eslint-disable react/no-unescaped-entities */
import { siteConfig } from '@/config/site'
// import { WALL_OF_LOVE } from '@/config/wallOfLove'
import { Products } from '@/config/products'
// import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'

const AllProducts = ({ id, locale }: { id: string; locale: any }) => {
  // const { theme } = useTheme()

  return (
    <section id={id} className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]">
      <div className="flex flex-col text-center max-w-2xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color={siteConfig.mainColor}>
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">
          {/* Don't take our word for it. Here's what they have to say. */}
          {locale.description1}{' '}
          <Link
            href={siteConfig.authors[0].twitter as string}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
          >
            {locale.description2}
          </Link>
          {locale.description3}
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-5 gap-5 overflow-hidden relative transition-all">
        {Products.map((item, index) => (
          <div className="mb-4 z-0 break-inside-avoid-column cursor-pointer" key={index}>
            <Link href="/shop/instagram">
              <div className="border border-slate/10 rounded-lg p-4 h-fit flex flex-col justify-center items-center hover:bg-[#5e17eb]">
                {/* {item.icon && React.createElement(item.icon, { className: 'text-5xl' })} */}
                {/* <Link href={'/' + item.name.toLocaleLowerCase()}> */}
                <div className="p-4 w-16 h-16 dark:text-white rounded-full">
                  {item.icon && React.createElement(item.icon, { className: 'text-3xl' })}
                </div>
                <p className="text-center">{item.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllProducts
