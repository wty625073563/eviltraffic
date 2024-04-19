import { HOW_IT_WORK } from '@/config/shop/HowItWork'
import { siteConfig } from '@/config/site'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'

const HowItWork = ({ lang }: { lang: string }) => {
  const locale = HOW_IT_WORK[lang.toUpperCase()]

  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          <h2 className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl">
            <RoughNotation type="highlight" show={true} color={siteConfig.mainColor}>
              {locale.title}
            </RoughNotation>
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
            {locale.steps.map((item, index) => (
              <div
                className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:opacity-70"
                key={index}
              >
                <div
                  className={`flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[${siteConfig.mainColor}]`}
                >
                  {item.icon && React.createElement(item.icon, { className: 'text-3xl' })}
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="text-base font-bold md:text-xl">{item.title}</h3>
                  <p className="text-[#636262] break-all">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWork
