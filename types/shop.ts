export type HeroType = {
  title: string
  title1: string
  description: string
  btn: string
  image: string
}

export type productItem = {
  icon: string
  title: string
  description: string
}

export type faq = {
  title: string
  content: string
}

export type shopConfig = {
  hero: HeroType
  productsTitle: string
  products: productItem[]
  faqs: faq[]
}
