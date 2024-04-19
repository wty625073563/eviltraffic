import { BiCloudDownload, BiLogoPaypal, BiPaste, BiSelectMultiple } from 'react-icons/bi'

type HowItWorkType = {
  icon: any
  title: string
  content: string
}

const EN = {
  title: '4 Simple Steps to Implementation',
  steps: [
    {
      icon: BiCloudDownload,
      title: 'Download the app',
      content:
        'Click the download button below or search "EvilTraffic" in the Google play market to download'
    },
    {
      icon: BiSelectMultiple,
      title: 'Choose your product',
      content:
        'According to your needs, choose different social platform services, and then select the corresponding products. For example, if I want to increase the number of followers on Instagram, I have to choose Instagram and buy followers.'
    },
    {
      icon: BiPaste,
      title: 'Fill in your information',
      content: `Once you've selected your platform and service, you can paste your information. For example, if you want to buy Instagram followers, you need to copy the link to your Instagram profile. Like this: https://www.instagram.com/travisscott/`
    },
    {
      icon: BiLogoPaypal,
      title: 'Make payment',
      content: `After the payment is successful, wait a moment and a lot of data will be added to your social media account! Now go make money!`
    }
  ]
}

export interface collection {
  [key: string]: {
    title: string
    steps: HowItWorkType[]
  }
}

export const HOW_IT_WORK: collection = {
  EN
}
