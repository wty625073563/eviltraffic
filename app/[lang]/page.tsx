import AllProducts from '@/components/home/AllProducts'
import CTA from '@/components/home/CTA'
import FAQ from '@/components/home/FAQ'
import Feature from '@/components/home/Feature'
import Hero from '@/components/home/Hero'
import ScrollingLogos from '@/components/home/ScrollingLogos'
import SocialProof from '@/components/home/SocialProof'
import { getDictionary, getLanguage } from '@/lib/i18n'

import { localeNames } from '@/lib/i18n'

export async function generateStaticParams() {
  const langs = Object.keys(localeNames)
  return langs.map(lang => {
    return { lang }
  })
}

export default async function LangHome({ params: { lang } }: { params: { lang: string } }) {
  let langName = getLanguage(lang)

  const dict = await getDictionary(langName)

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      {/* Can be used to display technology stack, partners, project honors, etc. */}
      <ScrollingLogos />

      {/* USP (Unique Selling Proposition) */}
      <Feature id="Features" locale={dict.Feature} langName={langName} />

      {/* Pricing */}
      {/* <Pricing id="Pricing" locale={dict.Pricing} langName={langName} /> */}

      {/* Testimonials / Wall of Love */}
      {/* <WallOfLove id="WallOfLove" locale={dict.WallOfLove} /> */}
      {/* <WallOfLove id="AllProducts" locale={dict.WallOfLove} /> */}
      <AllProducts id="AllProducts" locale={dict.AllProducts} />

      {/* FAQ (Frequently Asked Questions) */}
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  )
}
