import { SiteConfig } from '@/types/siteConfig'
import { BsTwitterX } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

// const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: 'Evil Traffic',
  mainColor: '#5e17eb',
  description:
    'Elevate your online presence with our premium social media metrics services. Gain authentic followers, likes, comments, and shares swiftly. Boost visibility, authority, and brand appeal in the digital realm. Stand out online effortlessly!',
  url: 'https://eviltraffic.com',
  // ogImage: 'https://landingpage.weijunext.com/og.png',
  metadataBase: '/',
  keywords: [
    'buy instagram followers',
    'buy facebook followers',
    'increase awareness',
    'social media traffic'
  ],
  authors: [
    {
      name: 'EvilTraffic',
      url: 'https://eviltraffic.com',
      twitter: 'https://twitter.com/eviltraffic3'
    }
  ],
  creator: '@EvilTraffic',
  // openSourceURL: 'https://github.com/weijunext/landing-page-boilerplate',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/logo.png'
  },
  headerLinks: [
    { name: 'Twitter', href: 'https://x.com/eviltraffic3', icon: BsTwitterX }
    // { name: 'Instagram', href: 'https://twitter.com/weijunext', icon: BsInstagram },
    // { name: 'Facebook', href: 'https://twitter.com/weijunext', icon: BsFacebook }
  ],
  footerLinks: [
    { name: 'email', href: 'mailto:wtydev9@gmail.com', icon: MdEmail },
    { name: 'Twitter', href: 'https://x.com/eviltraffic3', icon: BsTwitterX }
    // { name: 'Instagram', href: 'https://twitter.com/weijunext', icon: BsInstagram },
    // { name: 'Facebook', href: 'https://twitter.com/weijunext', icon: BsFacebook }
  ],
  footerProducts: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' }
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator
  }
}
