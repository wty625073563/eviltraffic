import { BiCloudDownload, BiLogoPaypal, BiPaste, BiSelectMultiple } from 'react-icons/bi'

type HowItWorkType = {
  icon: any
  title: string
  content: string
}

const ZH = {
  title: '4 个步骤简单实现',
  steps: [
    {
      icon: BiCloudDownload,
      title: '下载应用程序',
      content: '点击下方的下载按钮或在 Google Play 商店搜索"EvilTraffic"进行下载'
    },
    {
      icon: BiSelectMultiple,
      title: '选择您的产品',
      content:
        '根据您的需求,选择不同的社交平台服务,然后选择相应的产品。例如,如果我想增加 Instagram 上的粉丝数, 那就选择 Instagram 并购买粉丝。'
    },
    {
      icon: BiPaste,
      title: '填写您的信息',
      content: `选择好您的平台和服务后,您可以粘贴您的信息。例如,如果您想购买 Instagram 粉丝,您需要复制您的 Instagram 个人资料链接。像这样: https://www.instagram.com/travisscott/`
    },
    {
      icon: BiLogoPaypal,
      title: '进行支付',
      content: `支付成功后,稍等片刻,您的社交媒体账户上就会添加大量数据!现在去赚钱吧!`
    }
  ]
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

const JP = {
  title: '4つの簡単な実装ステップ',
  steps: [
    {
      icon: BiCloudDownload,
      title: 'アプリをダウンロード',
      content:
        '下のダウンロードボタンをクリックするか、Google Playマーケットで"EvilTraffic"を検索してダウンロードしてください'
    },
    {
      icon: BiSelectMultiple,
      title: 'お客様のサービスを選択',
      content:
        'お客様のニーズに合わせて、さまざまなソーシャルプラットフォームサービスを選択し、対応する製品を選んでください。例えば、Instagramのフォロワーを増やしたい場合は、Instagramを選択し、フォロワーを購入する必要があります。'
    },
    {
      icon: BiPaste,
      title: '情報を入力',
      content: `プラットフォームとサービスを選択したら、お客様の情報を入力できます。例えば、Instagramのフォロワーを購入したい場合は、Instagramのプロフィールリンクをコピーする必要があります。このようなリンクです: https://www.instagram.com/travisscott/`
    },
    {
      icon: BiLogoPaypal,
      title: '支払い',
      content: `支払いが完了すると、しばらくすると、ソーシャルメディアアカウントにたくさんのデータが追加されます!今すぐ収益を上げましょう!`
    }
  ]
}

const RU = {
  title: '4 простых шага к реализации',
  steps: [
    {
      icon: BiCloudDownload,
      title: 'Скачать приложение',
      content:
        'Нажмите на кнопку загрузки ниже или найдите "EvilTraffic" в Google Play Маркете, чтобы загрузить'
    },
    {
      icon: BiSelectMultiple,
      title: 'Выберите ваш продукт',
      content:
        'В соответствии с вашими потребностями, выберите различные услуги социальных платформ, а затем выберите соответствующие продукты. Например, если я хочу увеличить количество подписчиков в Instagram, я должен выбрать Instagram и купить подписчиков.'
    },
    {
      icon: BiPaste,
      title: 'Заполните вашу информацию',
      content: `Как только вы выбрали вашу платформу и услугу, вы можете вставить вашу информацию. Например, если вы хотите купить подписчиков в Instagram, вам нужно скопировать ссылку на ваш профиль в Instagram. Вот так: https://www.instagram.com/travisscott/`
    },
    {
      icon: BiLogoPaypal,
      title: 'Произвести оплату',
      content: `После успешной оплаты подождите немного, и на ваш аккаунт в социальных сетях будет добавлено много данных! Теперь идите зарабатывайте деньги!`
    }
  ]
}

const AR = {
  title: '4 خطوات بسيطة للتنفيذ',
  steps: [
    {
      icon: BiCloudDownload,
      title: 'قم بتنزيل التطبيق',
      content: 'انقر على زر التنزيل أدناه أو ابحث عن "EvilTraffic" في متجر Google Play لتنزيله'
    },
    {
      icon: BiSelectMultiple,
      title: 'اختر منتجك',
      content:
        'وفقًا الحتياجاتك، اختر خدمات منصات التواصل الاجتماعي المختلفة، ثم حدد المنتجات المناسبة. على سبيل المثال، إذا أردت زيادة عدد المتابعين على Instagram، فيجب علي اختيار Instagram وشراء المتابعين.'
    },
    {
      icon: BiPaste,
      title: 'أدخل معلوماتك',
      content: `بمجرد اختيار منصتك وخدمتك، يمكنك لصق معلوماتك. على سبيل المثال، إذا كنت تريد شراء متابعين Instagram، فأنت بحاجة إلى نسخ رابط ملفك الشخصي على Instagram. مثل هذا: https://www.instagram.com/travisscott/`
    },
    {
      icon: BiLogoPaypal,
      title: 'قم بالدفع',
      content: `بعد إتمام الدفع بنجاح، انتظر قليلاً وسيتم إضافة الكثير من البيانات إلى حساب وسائل التواصل الاجتماعي الخاص بك! الآن اذهب واربح المال!`
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
  ZH,
  EN,
  JP,
  RU,
  AR
}
