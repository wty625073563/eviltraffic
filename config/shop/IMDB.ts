import { shopConfig } from '@/types/shop'

const imageUrl = '/images/medias/other.png'

const ZH = {
  hero: {
    title: '购买',
    description: `您是否有一部心爱的电影,却因缺乏曝光而无人问津?您是否渴望为这部佳作赢得应有的赞誉和人气?现在,就让我们的IMDB推广服务为您的心头好作品注入全新生机!
      无论您所珍视的是一部经典老片,还是别具匠心的艺术新作,快将它交给我们的IMDB推广团队吧,让我们用专业的服务,帮这部您挚爱的影片在IMDB上绽放应有的光芒!`,
    title1: 'IMDB',
    btn: '立即购买',
    image: imageUrl
  },
  productsTitle: 'IMDB 服务',
  products: [
    {
      icon: 'BiStar',
      title: 'IMDB ratings',
      description:
        'IMDB ratings服务，让您钟爱的作品获得更广泛的认可与关注。让我们帮助您的心动之作在观众中散发魅力，让每一个评分都成为作品真实魅力的见证。IMDB ratings优化，让您的喜爱之作闪耀光芒，感动更多观众的心。'
    },
    {
      icon: 'BiLike',
      title: 'IMDB Review Likes',
      description:
        'IMDB Review Likes服务，增加更多正面评价，引领您发现心仪电影作品，吸引更多观众喜爱并关注。让我们协助您的喜爱之作在评论中脱颖而出，传递正能量，引导更多人走进影片的精彩世界。IMDB Review Likes增添正面能量，让您钟爱的作品得到更多人的认可与喜爱。'
    },
    {
      icon: 'BiDislike',
      title: 'IMDB Review Dislikes',
      description:
        'IMDB Review Dislikes 服务：增加负面评论，减少你不喜欢或觉得不好的作品的影响力。此服务还可以引导用户讨论，吸引更多关注到相应的作品。'
    }
  ],
  faqs: [
    {
      title: '启动IMDB推广后，多久能看到效果？',
      content:
        '效果的显现时间依赖于多种因素，包括您选择的推广类型和目标受众。大多数情况下，您可以在几天内开始看到推广效果。'
    },
    {
      title: '使用IMDB推广服务安全吗？',
      content:
        '绝对安全。我们重视您的隐私和账户安全，不会索取您的账户密码或其他敏感信息。所有交易都通过安全的支付方式进行。'
    },
    {
      title: '我可以为我喜欢的作品进行推广吗？',
      content: '当然可以！，让你喜欢的作品能够让更多的人知道和关注！'
    },
    {
      title: '如果我对IMDB推广服务不满意，能否申请退款？',
      content:
        '我们承诺提供满意保障。如果在约定时间内未达到预期效果，我们将提供退款或额外服务以补偿。'
    },
    {
      title: '许多人都在使用IMDB推广服务吗？',
      content:
        '是的，无论是个人品牌还是企业，许多人都通过IMDB推广服务来扩大影响力和提高品牌知名度。'
    }
  ]
}

const EN = {
  hero: {
    title: 'Buy Now',
    description: `Do you have a beloved film that lacks exposure and recognition? Do you yearn for your masterpiece to receive the acclaim and popularity it deserves? Now, let our IMDB promotion service breathe new life into your cherished work!
      Whether you treasure a classic old film or an ingeniously crafted artistic creation, entrust it to our IMDB promotion team. With our professional service, we'll help your beloved film shine on IMDB with the radiance it merits!`,
    title1: 'IMDB',
    btn: 'Buy Now',
    image: imageUrl
  },
  productsTitle: 'IMDB Services',
  products: [
    {
      icon: 'BiStar',
      title: 'IMDB Ratings',
      description:
        'IMDB Ratings service helps your beloved work gain wider recognition and attention. Let us assist your captivating creation in enchanting audiences, making each rating a testament to its true allure. IMDB Ratings optimization allows your favorite work to shine brilliantly and touch the hearts of more viewers.'
    },
    {
      icon: 'BiLike',
      title: 'IMDB Review Likes',
      description:
        'IMDB Review Likes service increases positive reviews, guiding you to discover your favorite film works and attracting more viewers to appreciate and follow them. Let us help your cherished work stand out in reviews, spread positivity, and lead more people into the wonderful world of the film. IMDB Review Likes add positive energy, enabling your beloved work to gain more recognition and adoration from a wider audience.'
    },
    {
      icon: 'BiDislike',
      title: 'IMDB Review Dislikes',
      description:
        'IMDB Review Dislikes service: Increase negative reviews to reduce the influence of works you dislike or find unsatisfactory. This service can also guide user discussions and attract more attention to the corresponding works.'
    }
  ],
  faqs: [
    {
      title: 'How long does it take to see results after starting IMDB promotion?',
      content:
        'The time it takes to see results depends on various factors, including the type of promotion you choose and your target audience. In most cases, you can start seeing the effects of promotion within a few days.'
    },
    {
      title: 'Is it safe to use IMDB promotion services?',
      content:
        'Absolutely safe. We value your privacy and account security and will never ask for your account password or other sensitive information. All transactions are conducted through secure payment methods.'
    },
    {
      title: 'Can I promote works that I like?',
      content: 'Of course! Let the works you love reach and captivate a wider audience!'
    },
    {
      title: 'Can I request a refund if I am not satisfied with the IMDB promotion service?',
      content:
        'We guarantee your satisfaction. If the expected results are not achieved within the agreed time frame, we will provide a refund or additional services to compensate.'
    },
    {
      title: 'Are many people using IMDB promotion services?',
      content:
        'Yes, many individuals and businesses use IMDB promotion services to expand their influence and increase brand awareness.'
    }
  ]
}

const JP = {
  hero: {
    title: '今すぐ購入',
    description: `あなたには、露出と認知度が不足している愛するフィルムがありますか?あなたの傑作にふさわしい称賛と人気を得たいと切望していますか?今、私たちのIMDBプロモーションサービスにより、あなたの大切な作品に新しい命を吹き込みましょう!       古典的な古い映画であろうと、独創的に作られた芸術作品であろうと、私たちのIMDBプロモーションチームにお任せください。私たちのプロフェッショナルなサービスで、あなたの愛する映画がIMDBで輝きを放つようサポートします!`,
    title1: 'IMDB',
    btn: '今すぐ購入',
    image: imageUrl
  },
  productsTitle: 'IMDBサービス',
  products: [
    {
      icon: 'BiStar',
      title: 'IMDBレーティング',
      description:
        'IMDBレーティングサービスは、あなたの愛する作品がより広く認知され、注目を集めるのに役立ちます。あなたの魅力的な作品が観客を魅了し、各レーティングがその真の魅力を証明するものとなるよう、私たちがお手伝いします。IMDBレーティングの最適化により、あなたのお気に入りの作品が輝きを放ち、より多くの視聴者の心に触れることができます。'
    },
    {
      icon: 'BiLike',
      title: 'IMDBレビューのいいね',
      description:
        'IMDBレビューのいいねサービスは、ポジティブなレビューを増やし、お気に入りの映画作品を発見し、より多くの視聴者にそれらを鑑賞してフォローしてもらうことを促します。レビューであなたの大切な作品が際立つよう、ポジティブさを広め、より多くの人々を映画の素晴らしい世界へと導くお手伝いをさせてください。IMDBレビューのいいねは、ポジティブなエネルギーを加え、あなたの愛する作品がより多くの認知と称賛を、より広い観客から得られるようにします。'
    },
    {
      icon: 'BiDislike',
      title: 'IMDBレビューの低評価',
      description:
        'IMDBレビューの低評価サービス:あなたが嫌いまたは不満を感じる作品の影響力を減らすために、ネガティブなレビューを増やします。このサービスは、ユーザーの議論を導き、対応する作品により多くの注目を集めることもできます。'
    }
  ],
  faqs: [
    {
      title: 'IMDBプロモーションを開始してから、結果が出るまでどのくらいかかりますか?',
      content:
        '結果が出るまでの時間は、選択するプロモーションの種類やターゲットオーディエンスなど、さまざまな要因によって異なります。ほとんどの場合、プロモーションの効果は数日以内に現れ始めます。'
    },
    {
      title: 'IMDBプロモーションサービスを使用するのは安全ですか?',
      content:
        '絶対に安全です。私たちはあなたのプライバシーとアカウントのセキュリティを大切にしており、決してアカウントのパスワードやその他の機密情報を求めることはありません。すべての取引は安全な決済方法で行われます。'
    },
    {
      title: '好きな作品をプロモーションできますか?',
      content:
        'もちろんです!あなたが愛する作品が、より多くの観客に届き、魅了されるようにしましょう!'
    },
    {
      title: 'IMDBプロモーションサービスに満足できない場合、返金を要求できますか?',
      content:
        '私たちはあなたの満足を保証します。合意した期間内に期待した結果が得られない場合は、返金または追加のサービスを提供して補償いたします。'
    },
    {
      title: '多くの人がIMDBプロモーションサービスを利用していますか?',
      content:
        'はい、多くの個人や企業が、影響力を拡大しブランド認知度を高めるために、IMDBプロモーションサービスを利用しています。'
    }
  ]
}

const RU = {
  hero: {
    title: 'Купить сейчас',
    description: `Есть ли у вас любимый фильм, который не получает должного внимания и признания? Вы мечтаете, чтобы ваш шедевр получил заслуженную славу и популярность? Теперь наша услуга продвижения на IMDB вдохнет новую жизнь в ваше дорогое сердцу произведение!
      Будь то классический старый фильм или гениально созданное художественное творение, доверьте его нашей команде продвижения на IMDB. С нашей профессиональной услугой мы поможем вашему любимому фильму засиять на IMDB с той яркостью, которую он заслуживает!`,
    title1: 'IMDB',
    btn: 'Купить сейчас',
    image: imageUrl
  },
  productsTitle: 'Услуги IMDB',
  products: [
    {
      icon: 'BiStar',
      title: 'Рейтинги IMDB',
      description:
        'Услуга рейтингов IMDB поможет вашему любимому произведению получить более широкое признание и внимание. Позвольте нам помочь вашему захватывающему творению очаровать аудиторию, сделав каждый рейтинг свидетельством его истинной притягательности. Оптимизация рейтингов IMDB позволит вашему любимому произведению ярко засиять и затронуть сердца большего числа зрителей.'
    },
    {
      icon: 'BiLike',
      title: 'Лайки отзывов IMDB',
      description:
        'Услуга лайков отзывов IMDB увеличивает количество положительных отзывов, помогая вам находить любимые фильмы и привлекая больше зрителей, чтобы оценить и следить за ними. Позвольте нам помочь вашему дорогому произведению выделиться в отзывах, распространять позитив и вводить больше людей в прекрасный мир кино. Лайки отзывов IMDB добавляют положительной энергии, позволяя вашему любимому произведению получить более широкое признание и любовь от большей аудитории.'
    },
    {
      icon: 'BiDislike',
      title: 'Дизлайки отзывов IMDB',
      description:
        'Услуга дизлайков отзывов IMDB: Увеличивайте количество негативных отзывов, чтобы снизить влияние произведений, которые вам не нравятся или кажутся неудовлетворительными. Эта услуга также может направлять обсуждение пользователей и привлекать больше внимания к соответствующим произведениям.'
    }
  ],
  faqs: [
    {
      title:
        'Сколько времени требуется, чтобы увидеть результаты после начала продвижения на IMDB?',
      content:
        'Время, необходимое для получения результатов, зависит от различных факторов, включая тип выбранного продвижения и целевую аудиторию. Как правило, вы можете начать видеть эффект от продвижения в течение нескольких дней.'
    },
    {
      title: 'Безопасно ли использовать услуги продвижения на IMDB?',
      content:
        'Абсолютно безопасно. Мы ценим вашу конфиденциальность и безопасность аккаунта и никогда не будем запрашивать ваш пароль или другую конфиденциальную информацию. Все транзакции осуществляются через надежные платежные методы.'
    },
    {
      title: 'Могу ли я продвигать произведения, которые мне нравятся?',
      content:
        'Конечно! Позвольте любимым произведениям достичь и очаровать более широкую аудиторию!'
    },
    {
      title:
        'Могу ли я запросить возврат средств, если я не удовлетворен услугой продвижения на IMDB?',
      content:
        'Мы гарантируем ваше удовлетворение. Если ожидаемые результаты не будут достигнуты в согласованные сроки, мы предоставим возврат средств или дополнительные услуги в качестве компенсации.'
    },
    {
      title: 'Многие ли люди пользуются услугами продвижения на IMDB?',
      content:
        'Да, многие частные лица и компании используют услуги продвижения на IMDB, чтобы расширить свое влияние и повысить узнаваемость бренда.'
    }
  ]
}

const AR = {
  hero: {
    title: 'اشتر الآن',
    description: ` هل لديك فيلم محبوب ينقصه التعرض والاعتراف؟ هل تتمنى أن ينال عملك الفني الرائع الإشادة والشعبية التي يستحقها؟ الآن، دعنا نخدم ترويج IMDB لنضفي حياة جديدة على عملك المحبوب!
  سواء كان فيلمك الكلاسيكي القديم أو إبداعك الفني المتقن، ائتمننا على خدمة ترويج IMDB. بخدمتنا المحترفة، سنساعد فيلمك المحبوب في الإشراق على IMDB بالبريق الذي يستحقه!`,
    title1: 'IMDB',
    btn: 'اشتر الآن',
    image: imageUrl
  },
  productsTitle: 'خدمات IMDB',
  products: [
    {
      icon: 'BiStar',
      title: 'تقييمات IMDB',
      description:
        'خدمة تقييمات IMDB تساعد في الحصول على اعتراف وانتباه أوسع لعملك المحبوب. دعنا نساعد في إبهار الجمهور بعملك الرائع، مما يجعل كل تقييم شاهداً على جاذبيته الحقيقية. تحسين تقييمات IMDB يسمح لعملك المفضل بالإشراق ولمس قلوب المشاهدين بشكل أكبر.'
    },
    {
      icon: 'BiLike',
      title: 'إعجابات مراجعات IMDB',
      description:
        'خدمة إعجابات مراجعات IMDB تزيد من المراجعات الإيجابية، وتساعدك في اكتشاف أعمالك السينمائية المفضلة وجذب المزيد من المشاهدين لتقدير ومتابعتها. دعنا نساعد عملك المحبوب في التميز في المراجعات، ونشر الإيجابية، وقيادة المزيد من الناس إلى عالم الفيلم الرائع. تضيف إعجابات مراجعات IMDB طاقة إيجابية، مما يمكّن عملك المحبوب من الحصول على المزيد من الاعتراف والتقدير من جمهور أوسع.'
    },
    {
      icon: 'BiDislike',
      title: 'إعجابات سلبية لمراجعات IMDB',
      description:
        'خدمة إعجابات سلبية لمراجعات IMDB: زيادة المراجعات السلبية لتقليل تأثير الأعمال التي لا تحبها أو تجدها غير مرضية. يمكن أن تساعد هذه الخدمة أيضًا في توجيه مناقشات المستخدمين وجذب المزيد من الانتباه إلى الأعمال ذات الصلة.'
    }
  ],
  faqs: [
    {
      title: 'كم من الوقت يستغرق لرؤية النتائج بعد بدء ترويج IMDB؟',
      content:
        'الوقت اللازم لرؤية النتائج يعتمد على عوامل مختلفة، بما في ذلك نوع الترويج الذي تختاره وجمهورك المستهدف. في معظم الحالات، يمكنك بدء رؤية آثار الترويج في غضون أيام قليلة.'
    },
    {
      title: 'هل من الآمن استخدام خدمات ترويج IMDB؟',
      content:
        'نعم، آمن تمامًا. نحن نقدر خصوصيتك وأمان حسابك ولن نطلب أبدًا كلمة مرورك أو معلومات حساسة أخرى. تتم جميع المعاملات من خلال طرق دفع آمنة.'
    },
    {
      title: 'هل يمكنني الترويج للأعمال التي أحبها؟',
      content: 'بالطبع! دعنا نساعد الأعمال التي تحبها في الوصول إلى جمهور أوسع واستقطاب إعجابهم!'
    },
    {
      title: 'هل يمكنني طلب استرداد الأموال إذا لم أكن راضيًا عن خدمة ترويج IMDB؟',
      content:
        'نحن نضمن رضاك. إذا لم يتم تحقيق النتائج المتوقعة ضمن الإطار الزمني المتفق عليه، فسنقدم لك استرداد الأموال أو خدمات إضافية للتعويض.'
    },
    {
      title: 'هل يستخدم الكثير من الناس خدمات ترويج IMDB؟',
      content:
        'نعم، يستخدم الكثير من الأفراد والشركات خدمات ترويج IMDB لتوسيع نفوذهم وزيادة الوعي بالعلامة التجارية.'
    }
  ]
}

export interface collection {
  [key: string]: shopConfig
}

export const ALL_IMDB: collection = {
  EN,
  ZH,
  JP,
  RU,
  AR
}
