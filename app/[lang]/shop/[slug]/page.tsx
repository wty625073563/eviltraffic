import AllProducts from '@/components/home/AllProducts'
import CTA from '@/components/home/CTA'
import Feature from '@/components/home/Feature'
import FAQ from '@/components/shop/FAQ'
import Hero from '@/components/shop/Hero'
import HowItWork from '@/components/shop/HowItWork'
import Products from '@/components/shop/Products'
import { getConfig } from '@/config/shop'
import { getDictionary, getLanguage } from '@/lib/i18n'

export default async function ShopPage({
  params: { lang, slug }
}: {
  params: { lang: string; slug: string }
}) {
  console.log(slug)

  let langName = getLanguage(lang)

  const config = getConfig(slug, langName)

  const dict = await getDictionary(langName)

  return (
    <>
      <Hero hero={config.hero} />

      <Products id="Products" title={config.productsTitle} products={config.products} />

      <Feature id="Features" locale={dict.Feature} langName={langName} />

      <HowItWork lang={langName}></HowItWork>

      <AllProducts id="AllProducts" locale={dict.AllProducts} />

      <FAQ id="FAQ" locale={dict.FAQ} faqs={config.faqs} />

      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  )
}
