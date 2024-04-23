import { shopConfig } from '@/types/shop'

const imageUrl = '/images/medias/other.png'

const ZH = {
  hero: {
    title: '购买',
    description: `你是否也曾有一款挚爱的游戏被冷落在Steam的海量作品中?你是否也渴望为这部精心之作赢得应有的关注和赞誉?现在,就让我们的专业Steam推广服务,助你一臂之力,让心头好作品在这个游戏平台上熠熠生辉!
 
    更有甚者,我们还将推动您所钟爱的游戏作品在各大社交平台上广泛传播,让其独特的游戏体验赢得更多共鸣与赞赏。无论您所挚爱的是一款经典重现的佳作,还是别具创意的独立游戏,尽可将其交由我们的专业团队,我们必将用行之有效的推广方案,助其在Steam平台上绽放应有的光芒!`,
    title1: 'Steam',
    btn: '立即购买',
    image: imageUrl
  },
  productsTitle: 'Steam 服务',
  products: [
    {
      icon: 'BiCommentDetail',
      title: 'Steam Reviews',
      description:
        '通过我们的专业服务,您可以快速获得大量的Steam游戏评论,提高您的游戏影响力,吸引更多的玩家关注。我们的服务安全可靠,价格合理,让您轻松提升Steam游戏的人气。'
    },
    {
      icon: 'BiUserPlus',
      title: 'Steam Followers',
      description:
        '我们提供专业的Steam粉丝增长服务,帮助您快速获得大量真实活跃的Steam关注者。通过我们的服务,您的Steam账号将获得更多的曝光和互动,提升您的游戏影响力,吸引更多潜在玩家。'
    },
    {
      icon: 'BiBookmark',
      title: 'Steam Saves',
      description:
        '我们的Steam保存量增长服务可以帮助您的Steam游戏获得更多的收藏和关注。通过我们的专业服务,您的Steam游戏将获得大量的保存量,提高您的游戏影响力,吸引更多潜在玩家。'
    },
    {
      icon: 'BiListUl',
      title: 'Steam Wishlist',
      description:
        '我们提供专业的Steam 愿望清单增长服务,帮助您的Steam游戏获得更多的关注和期待。通过我们的服务,您的Steam游戏将获得大量的 愿望清单收录,提高您的游戏影响力,吸引更多潜在玩家。'
    }
  ],
  faqs: [
    {
      title: '购买粉丝违反Steam政策吗？',
      content: '当然不会。Steam不会因为您有粉丝而删除粉丝或封禁您的账号。'
    },
    {
      title: '获得粉丝需要多长时间？',
      content:
        '这取决于库存情况和您想要获得的粉丝数量。当您输入您想要获得的数量时，您将看到预计时间。'
    },
    {
      title: '启动Steam推广后，多久能看到效果？',
      content:
        '效果的显现时间依赖于多种因素，包括您选择的推广类型和目标受众。大多数情况下，您可以在几天内开始看到推广效果。'
    },
    {
      title: '使用Steam推广服务安全吗？',
      content:
        '绝对安全。我们重视您的隐私和账户安全，不会索取您的账户密码或其他敏感信息。所有交易都通过安全的支付方式进行。'
    },
    {
      title: '我可以为我喜欢的作品进行推广吗？',
      content: '当然可以！，让你喜欢的作品能够让更多的人知道和关注！'
    },
    {
      title: '如果我对Steam推广服务不满意，能否申请退款？',
      content:
        '我们承诺提供满意保障。如果在约定时间内未达到预期效果，我们将提供退款或额外服务以补偿。'
    },
    {
      title: '许多人都在使用Steam推广服务吗？',
      content:
        '非常常见，因为如果您购买粉丝，您将在很短的时间内实现您的目标。这就是为什么许多个人和商业资料更喜欢购买粉丝。'
    }
  ]
}

const EN = {
  hero: {
    title: 'Purchase',
    description: `Have you ever had a beloved game that was overlooked in the vast sea of titles on Steam? Have you ever longed for your carefully crafted work to receive the attention and acclaim it deserves? Now, let our professional Steam promotion service help you, and let your beloved work shine brightly on this gaming platform!

    Moreover, we will also drive the widespread dissemination of your cherished game on various social media platforms, allowing its unique gaming experience to resonate with and earn more appreciation from others. Whether your beloved is a classic revival or an innovative independent game, simply entrust it to our professional team, and we will use effective promotion strategies to help it radiate the glory it deserves on the Steam platform!`,
    title1: 'Steam',
    btn: 'Buy Now',
    image: imageUrl
  },
  productsTitle: 'Steam Services',
  products: [
    {
      icon: 'BiCommentDetail',
      title: 'Steam Reviews',
      description: `Through our professional service, you can quickly obtain a large number of Steam game reviews, increasing your game influence and attracting more players' attention. Our service is safe and reliable, with reasonable prices, allowing you to easily boost the popularity of your Steam games.`
    },
    {
      icon: 'BiUserPlus',
      title: 'Steam Followers',
      description:
        'We provide a professional Steam follower growth service to help you quickly obtain a large number of real and active Steam followers. Through our service, your Steam account will receive more exposure and interaction, enhancing your game influence and attracting more potential players.'
    },
    {
      icon: 'BiBookmark',
      title: 'Steam Saves',
      description:
        'Our Steam saves growth service can help your Steam games receive more saves and attention. Through our professional service, your Steam games will receive a large number of saves, increasing your game influence and attracting more potential players.'
    },
    {
      icon: 'BiListUl',
      title: 'Steam Wishlist',
      description:
        'We provide a professional Steam wishlist growth service to help your Steam games receive more attention and anticipation. Through our service, your Steam games will receive a large number of wishlist additions, increasing your game influence and attracting more potential players.'
    }
  ],
  faqs: [
    {
      title: `Does buying followers violate Steam's policy?`,
      content:
        'Absolutely not. Steam will not delete your followers or ban your account just because you have followers.'
    },
    {
      title: 'How long does it take to get the followers?',
      content:
        'This depends on the inventory and the number of followers you want to obtain. When you enter the desired quantity, you will see the estimated time.'
    },
    {
      title: 'How soon can I see the results after starting the Steam promotion?',
      content:
        'The time it takes to see the results depends on various factors, including the type of promotion and your target audience. In most cases, you can start seeing the effects within a few days.'
    },
    {
      title: 'Is it safe to use the Steam promotion service?',
      content:
        'Absolutely safe. We value your privacy and account security, and we will not ask for your account password or other sensitive information. All transactions are conducted through secure payment methods.'
    },
    {
      title: 'Can I promote the works I like?',
      content: 'Absolutely! Let more people know and follow the works you love!'
    },
    {
      title: 'If I am not satisfied with the Steam promotion service, can I request a refund?',
      content:
        'We promise a satisfaction guarantee. If the expected results are not achieved within the agreed time, we will provide a refund or additional services to compensate.'
    },
    {
      title: 'Are many people using the Steam promotion service?',
      content: `It is very common, as if you buy followers, you will achieve your goals in a very short time. That's why many individuals and businesses prefer to buy followers.`
    }
  ]
}

const JP = {
  hero: {
    title: '購入',
    description: `膨大なタイトルの海の中で、大切なゲームが見逃されたことはありませんか? 精心に作り上げた作品が十分な注目と評価を得られることを望んだことはありませんか? 今こそ、当社の専門的なSteam プロモーションサービスがあなたを助け、大切な作品をこのゲームプラットフォームで輝かせることができます!

    さらに、様々なソーシャルメディアプラットフォームであなたの大切なゲームの広範な普及を推進し、そのユニークなゲーム体験が共感を呼び、より多くの評価を得られるようにします。クラシックの復活作品であれ、革新的な独立系ゲームであれ、専門チームにお任せください。効果的なプロモーション戦略を使って、Steamプラットフォームで輝くべき栄光を手に入れるお手伝いをさせていただきます!`,
    title1: 'Steam',
    btn: '今すぐ購入',
    image: imageUrl
  },
  productsTitle: 'Steamサービス',
  products: [
    {
      icon: 'BiCommentDetail',
      title: 'Steamレビュー',
      description:
        '専門のサービスを通じて、Steamゲームのレビューを大量に得ることができ、ゲームの影響力を高め、より多くのプレイヤーの注目を集めることができます。当社のサービスは安全で信頼性が高く、価格も合理的なため、Steamゲームの人気を簡単に高めることができます。'
    },
    {
      icon: 'BiUserPlus',
      title: 'Steamフォロワー',
      description:
        '当社は、Steamフォロワー獲得のための専門的なサービスを提供しており、多数の本物で活発なSteamフォロワーを素早く得られるよう支援します。当社のサービスを通じて、Steamアカウントがより多くの露出と交流を得られるようになり、ゲームの影響力が高まり、より多くの潜在プレイヤーを引き付けることができます。'
    },
    {
      icon: 'BiBookmark',
      title: 'Steamセーブ',
      description:
        '当社のSteamセーブ数増加サービスにより、Steamゲームがより多くのセーブと注目を集めることができます。専門のサービスを通じて、Steamゲームが多数のセーブ数を得られるようになり、ゲームの影響力が高まり、より多くの潜在プレイヤーを引き付けることができます。'
    },
    {
      icon: 'BiListUl',
      title: 'Steamウィッシュリスト',
      description:
        '当社は、Steamウィッシュリスト増加のための専門的なサービスを提供しており、Steamゲームがより多くの注目と期待を集められるよう支援します。当社のサービスを通じて、Steamゲームがウィッシュリストに多数追加されるようになり、ゲームの影響力が高まり、より多くの潜在プレイヤーを引き付けることができます。'
    }
  ],
  faqs: [
    {
      title: 'フォロワーを購入するとSteamのポリシーに違反しますか?',
      content:
        '全く違反しません。Steamはフォロワーがいるからといって、フォロワーを削除したりアカウントを停止したりすることはありません。'
    },
    {
      title: 'フォロワーを得るのにどのくらい時間がかかりますか?',
      content:
        '在庫状況と、得たいフォロワー数によって異なります。希望の数量を入力すると、推定時間が表示されます。'
    },
    {
      title: 'Steamプロモーションを始めてからどのくらいで効果が出ますか?',
      content:
        '効果が出るまでの時間は、プロモーションの種類やターゲット層など、さまざまな要因によって異なります。ほとんどの場合、数日以内に効果が現れ始めます。'
    },
    {
      title: 'Steamプロモーションサービスは安全ですか?',
      content:
        '完全に安全です。プライバシーとアカウントセキュリティを大切にし、パスワードやその他の機密情報を聞くことはありません。すべての取引は安全な支払い方法で行われます。'
    },
    {
      title: '自分の好きな作品を宣伝できますか?',
      content: 'もちろんです! 好きな作品をもっと多くの人に知ってもらい、フォローしてもらいましょう!'
    },
    {
      title: 'Steamプロモーションサービスに満足できない場合、返金はできますか?',
      content:
        '満足保証をお約束します。合意した期間内に期待通りの結果が得られない場合は、返金または追加サービスを提供させていただきます。'
    },
    {
      title: 'Steamプロモーションサービスを利用している人は多いですか?',
      content:
        'とてもよくあることです。フォロワーを購入すれば、非常に短期間で目標を達成できるからです。そのため、多くの個人や企業がフォロワーを購入することを好んでいます。'
    }
  ]
}

const RU = {
  hero: {
    title: 'Покупка',
    description: `Случалось ли вам, что любимая игра терялась в огромном море названий на платформе Steam? Мечтали ли вы, чтобы ваше тщательно созданное произведение получило должное внимание и признание? Теперь позвольте нашей профессиональной службе продвижения на Steam помочь вам, и ваше любимое творение засияет ярко на этой игровой платформе!

    Более того, мы также будем способствовать широкому распространению вашей любимой игры на различных социальных медиа-платформах, позволяя ее уникальному игровому опыту находить отклик и получать все больше признания от других. Будь то классическое возрождение или инновационная независимая игра, просто доверьте ее нашей профессиональной команде, и мы будем использовать эффективные стратегии продвижения, чтобы помочь ей излучать ту славу, которую она заслуживает на платформе Steam!`,
    title1: 'Steam',
    btn: 'Купить сейчас',
    image: imageUrl
  },
  productsTitle: 'Услуги Steam',
  products: [
    {
      icon: 'BiCommentDetail',
      title: 'Отзывы в Steam',
      description:
        'Благодаря нашей профессиональной услуге вы можете быстро получить большое количество отзывов на ваши игры в Steam, увеличивая влияние вашей игры и привлекая больше внимания игроков. Наша услуга безопасна и надежна, с разумными ценами, что позволяет вам легко повысить популярность ваших игр в Steam.'
    },
    {
      icon: 'BiUserPlus',
      title: 'Подписчики в Steam',
      description:
        'Мы предоставляем профессиональную услугу по увеличению подписчиков в Steam, чтобы помочь вам быстро получить большое количество реальных и активных подписчиков. Благодаря нашей услуге ваш аккаунт в Steam получит больше внимания и взаимодействия, повышая влияние вашей игры и привлекая больше потенциальных игроков.'
    },
    {
      icon: 'BiBookmark',
      title: 'Сохранения в Steam',
      description:
        'Наша услуга по увеличению сохранений в Steam может помочь вашим играм получить больше сохранений и внимания. Благодаря нашей профессиональной услуге, ваши игры в Steam будут получать большое количество сохранений, увеличивая влияние вашей игры и привлекая больше потенциальных игроков.'
    },
    {
      icon: 'BiListUl',
      title: 'Список желаний в Steam',
      description:
        'Мы предоставляем профессиональную услугу по увеличению списка желаний в Steam, чтобы помочь вашим играм получить больше внимания и ожидания. Благодаря нашей услуге, ваши игры в Steam будут получать большое количество добавлений в список желаний, увеличивая влияние вашей игры и привлекая больше потенциальных игроков.'
    }
  ],
  faqs: [
    {
      title: 'Нарушает ли покупка подписчиков политику Steam?',
      content:
        'Абсолютно нет. Steam не будет удалять ваших подписчиков или блокировать ваш аккаунт только потому, что у вас есть подписчики.'
    },
    {
      title: 'Сколько времени занимает получение подписчиков?',
      content:
        'Это зависит от наличия и количества подписчиков, которых вы хотите получить. Когда вы введете желаемое количество, вы увидите предполагаемое время.'
    },
    {
      title: 'Как скоро я могу увидеть результаты после начала продвижения в Steam?',
      content:
        'Время, необходимое для получения результатов, зависит от различных факторов, включая тип продвижения и вашу целевую аудиторию. В большинстве случаев вы можете начать видеть эффект в течение нескольких дней.'
    },
    {
      title: 'Безопасно ли использовать службу продвижения в Steam?',
      content:
        'Абсолютно безопасно. Мы ценим вашу конфиденциальность и безопасность аккаунта и не будем запрашивать ваш пароль от аккаунта или другую конфиденциальную информацию. Все транзакции проводятся через безопасные платежные методы.'
    },
    {
      title: 'Могу ли я продвигать работы, которые мне нравятся?',
      content: 'Конечно! Пусть больше людей узнают и следят за работами, которые вы любите!'
    },
    {
      title:
        'Если я не удовлетворен службой продвижения в Steam, могу ли я запросить возврат средств?',
      content:
        'Мы обещаем гарантию удовлетворенности. Если ожидаемые результаты не будут достигнуты в согласованные сроки, мы предоставим возврат средств или дополнительные услуги в качестве компенсации.'
    },
    {
      title: 'Многие ли люди используют службу продвижения в Steam?',
      content:
        'Это очень распространено, ведь если вы покупаете подписчиков, вы достигнете своих целей в очень короткое время. Вот почему многие частные лица и компании предпочитают покупать подписчиков.'
    }
  ]
}

const AR = {
  hero: {
    title: 'الشراء',
    description: `هل سبق لك أن كانت لديك لعبة محبوبة تم تجاهلها في البحر الشاسع من العناوين على Steam؟ هل سبق لك أن تمنيت أن ينال عملك المصقول الاهتمام والتقدير اللائق به؟ الآن، اسمح لخدمة الترويج الاحترافية الخاصة بنا على Steam أن تساعدك، وتجعل عملك المحبوب يشع بريقًا على هذه المنصة!

    وعلاوة على ذلك، سنقوم أيضًا بدفع انتشار لعبتك المحبوبة على منصات التواصل الاجتماعي المختلفة، مما يتيح لتجربتها الفريدة في اللعب أن تجد صدى وتحظى بمزيد من التقدير من الآخرين. سواء كان المحبوب لديك إحياء كلاسيكي أو لعبة مستقلة مبتكرة، ما عليك سوى أن تُسلمها لفريقنا المحترف، وسنستخدم استراتيجيات الترويج الفعالة لمساعدتها على إشعاع المجد الذي تستحقه على منصة Steam!`,
    title1: 'Steam',
    btn: 'اشتر الآن',
    image: imageUrl
  },
  productsTitle: 'خدمات Steam',
  products: [
    {
      icon: 'BiCommentDetail',
      title: 'مراجعات Steam',
      description:
        'من خلال خدمتنا الاحترافية، يمكنك الحصول بسرعة على عدد كبير من مراجعات ألعاب Steam، مما يزيد من تأثير لعبتك ويجذب المزيد من انتباه اللاعبين. خدمتنا آمنة وموثوقة، بأسعار معقولة، مما يتيح لك تعزيز شعبية ألعابك على Steam بسهولة.'
    },
    {
      icon: 'BiUserPlus',
      title: 'متابعو Steam',
      description:
        'نحن نقدم خدمة احترافية لنمو متابعي Steam لمساعدتك على الحصول بسرعة على عدد كبير من متابعي Steam الحقيقيين والنشطين. من خلال خدمتنا، سيحصل حسابك على Steam على المزيد من التعرض والتفاعل، مما يعزز تأثير لعبتك ويجذب المزيد من اللاعبين المحتملين.'
    },
    {
      icon: 'BiBookmark',
      title: 'حفظات Steam',
      description:
        'يمكن أن تساعد خدمة نمو حفظات Steam الخاصة بنا في الحصول على المزيد من الحفظات والاهتمام بألعابك على Steam. من خلال خدمتنا المهنية، ستحصل ألعابك على Steam على عدد كبير من الحفظات، مما يزيد من تأثير لعبتك ويجذب المزيد من اللاعبين المحتملين.'
    },
    {
      icon: 'BiListUl',
      title: 'قائمة الأمنيات على Steam',
      description:
        'نحن نقدم خدمة احترافية لنمو قائمة الأمنيات على Steam لمساعدة ألعابك على الحصول على المزيد من الاهتمام والتوقع. من خلال خدمتنا، ستحصل ألعابك على Steam على عدد كبير من الإضافات إلى قائمة الأمنيات، مما يزيد من تأثير لعبتك ويجذب المزيد من اللاعبين المحتملين.'
    }
  ],
  faqs: [
    {
      title: 'هل يخالف شراء المتابعين سياسة Steam؟',
      content: 'بالتأكيد لا. لن يقوم Steam بحذف متابعيك أو حظر حسابك مجرد لأنك لديك متابعون.'
    },
    {
      title: 'كم من الوقت يستغرق الحصول على المتابعين؟',
      content:
        'يعتمد ذلك على المخزون والعدد من المتابعين الذين تريد الحصول عليهم. عند إدخال الكمية المرغوبة، ستشاهد الوقت المقدر.'
    },
    {
      title: 'متى يمكنني رؤية النتائج بعد بدء الترويج على Steam؟',
      content:
        'يعتمد الوقت اللازم لرؤية النتائج على عوامل مختلفة، بما في ذلك نوع الترويج وجمهورك المستهدف. في معظم الحالات، يمكنك البدء في رؤية التأثير خلال بضعة أيام.'
    },
    {
      title: 'هل من الآمن استخدام خدمة الترويج على Steam؟',
      content:
        'نعم، آمن تمامًا. نحن نقدر خصوصيتك وأمان حسابك، ولن نطلب كلمة مرور حسابك أو أي معلومات حساسة أخرى. تتم جميع المعاملات من خلال طرق دفع آمنة.'
    },
    {
      title: 'هل يمكنني الترويج للأعمال التي أحبها؟',
      content: 'بالتأكيد! دع المزيد من الناس يعرفون ويتابعون الأعمال التي تحبها!'
    },
    {
      title: 'إذا لم أكن راضيًا عن خدمة الترويج على Steam، هل يمكنني طلب استرداد الأموال؟',
      content:
        'نحن نضمن الرضا. إذا لم يتم تحقيق النتائج المتوقعة في الوقت المتفق عليه، فسنقدم استرداد الأموال أو خدمات إضافية للتعويض.'
    },
    {
      title: 'هل يستخدم الكثير من الناس خدمة الترويج على Steam؟',
      content:
        'هذا شائع جدًا، فإذا كنت تشتري متابعين، ستحقق أهدافك في وقت قصير جدًا. لهذا السبب يفضل العديد من الأفراد والشركات شراء المتابعين.'
    }
  ]
}

export interface collection {
  [key: string]: shopConfig
}

export const ALL_STEAM: collection = {
  EN,
  ZH,
  JP,
  RU,
  AR
}
