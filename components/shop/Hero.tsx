import { siteConfig } from '@/config/site'
import { HeroType } from '@/types/shop'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'

const Hero = ({ hero, color }: { hero: HeroType; color?: string }) => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-13 sm:gap-28 md:grid-cols-2">
            <div className="max-w-[720px] lg:max-w-[842px]">
              <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
                <span className="mr-3">{hero.title}</span>
                <RoughNotation type="highlight" show={true} color={siteConfig.mainColor}>
                  {hero.title1}
                </RoughNotation>
              </h1>
              <h2 className="mb-6 max-w-[528px] text-xl text-[#636262] md:mb-10 lg:mb-12">
                {hero.description}
              </h2>
              <a
                href="#"
                className="mb-6 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mb-10 lg:mb-12"
              >
                {hero.btn}
              </a>
            </div>
            <div className="relative left-4 h-full max-h-[500px] w-[65%] overflow-visible md:left-0 md:w-full">
              <Image
                src={hero.image}
                alt={hero.title}
                width={150}
                height={300}
                className="mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover"
              />

              <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
              {/* <a
                href="#"
                className={`absolute bottom-auto left-[50%] right-auto top-1/2 inline-block max-w-full object-contain font-bold text-[${siteConfig.mainColor}] max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 md:bottom-[-48px] md:left-[-48px] md:right-auto md:top-auto`}
              >
                <Image
                  src="/logo-circle.png"
                  width={100}
                  height={100}
                  alt="EvilTraffic"
                  className="inline-block"
                />
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
