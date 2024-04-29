import { shopConfig } from '@/types/shop'

const imageUrl = '/images/medias/youtube.png'

const ZH = {
  hero: {
    title: '购买',
    description: `在这个视频内容百花齐放的时代,YouTube已成为全球创作者展现自我的绝佳舞台。无论您是生活Vlogger、游戏解说大神,还是泛知识科普分子,在这里拥有一个人气火爆、影响力十足的个人频道无疑是实现内容变现的不二法门。然而,单凭出色内容创作是远远不够的,您还需要专业的推广力量,助您在海量视频作品中引起足够关注!`,
    title1: 'YouTube',
    btn: '立即购买',
    image: imageUrl
  },
  productsTitle: 'YouTube 服务',
  products: [
    {
      icon: 'BiSolidLike',
      title: 'YouTube Video Likes',
      description:
        '在YouTube视频海洋中想获得持久人气可并非易事。我们的点赞推广服务将为您的优质内容注入人气动力,通过规模化种草点赞等营销手段持续积累正面口碑,让更多志趣相投的用户欣赏您的创作力。'
    },
    {
      icon: 'BiDislike',
      title: 'YouTube Video Dislikes',
      description:
        '想在YouTube上制造舆论和降低竞争对手得影响力？你就需要YouTube Video Dislikes服务了！将舆论引爆，同时制造热点！'
    },
    {
      icon: 'BiUserPlus',
      title: 'YouTube Subscribers',
      description:
        '订阅量是YouTube内容从业者影响力重要体现。我们将为您量身打造增订阅计划,通过精准种草营销、引流互动等为您持续积累忠实粉丝群体,让更多观众及时获悉您的优质内容。'
    },
    {
      icon: 'BiVideo',
      title: 'YouTube Views',
      description:
        '要在YouTube上赢得足够曝光,单凭出色创意远远不够。我们将为您量身定制播放量提升计划,通过精准种草推广、持续热度供养等策略为您持续积累曝光度,确保作品触达更多志趣相投的观众。'
    },
    {
      icon: 'BiMessageDetail',
      title: 'YouTube Comments',
      description:
        '在YouTube,评论互动是内容创作者与观众建立连接的关键。我们将为您量身定制评论引流计划,通过人工种草互动、活动策划等手段为您持续积累正面评论声量,增进与粉丝互动体验。'
    },
    {
      icon: 'BiPlusMedical',
      title: 'YouTube More',
      description:
        '我们的专业YouTube推广服务将全方位助力您在这个平台上绽放独特光彩。通过精准引流种草、热门活动互动、持续热度供养等策略为您不间断注入人气动能,让更多观众欣赏您出色创作力。'
    }
  ],
  faqs: [
    {
      title: '购买订阅者违反YouTube政策吗？',
      content: '当然不会。YouTube不会因为您有订阅者而删除订阅者或封禁您的账号。'
    },
    {
      title: '获得订阅者需要多长时间？',
      content:
        '这取决于库存情况和您想要获得的订阅者数量。当您输入您想要获得的数量时，您将看到预计时间。'
    },
    {
      title: '启动YouTube推广后，多久能看到效果？',
      content:
        '效果的显现时间依赖于多种因素，包括您选择的推广类型和目标受众。大多数情况下，您可以在几天内开始看到推广效果。'
    },
    {
      title: '使用YouTube推广服务安全吗？',
      content:
        '绝对安全。我们重视您的隐私和账户安全，不会索取您的账户密码或其他敏感信息。所有交易都通过安全的支付方式进行。'
    },
    {
      title: '我可以为我喜欢的作品进行推广吗？',
      content: '当然可以！，让你喜欢的作品能够让更多的人知道和关注！'
    },
    {
      title: '如果我对YouTube推广服务不满意，能否申请退款？',
      content:
        '我们承诺提供满意保障。如果在约定时间内未达到预期效果，我们将提供退款或额外服务以补偿。'
    },
    {
      title: '许多人都在使用YouTube推广服务吗？',
      content:
        '非常常见，因为如果您购买播放量，您将在很短的时间内实现您的目标。这就是为什么许多个人和商业资料更喜欢购买播放量。'
    }
  ]
}

const EN = {
  hero: {
    title: 'Purchase',
    description: `In this era of thriving video content, YouTube has become the perfect stage for creators to showcase their talents. Whether you are a lifestyle vlogger, a gaming expert, or a knowledge-sharing enthusiast, having a popular and influential personal channel on this platform is undoubtedly the key to monetizing your content. However, outstanding content creation alone is far from enough. You also need professional promotion power to help your content stand out in the vast sea of videos!`,
    title1: 'YouTube',
    btn: 'Buy Now',
    image: imageUrl
  },
  productsTitle: 'YouTube Services',
  products: [
    {
      icon: 'BiSolidLike',
      title: 'YouTube Video Likes',
      description:
        'Gaining lasting popularity on the vast YouTube platform is no easy feat. Our like promotion service will inject vitality into your high-quality content, using large-scale seeding and other marketing tactics to continuously build a positive reputation, allowing more like-minded users to appreciate your creativity.'
    },
    {
      icon: 'BiDislike',
      title: 'YouTube Video Dislikes',
      description:
        'Want to create a buzz and reduce the influence of your competitors on YouTube? You need the YouTube Video Dislikes service! Ignite public opinion and create hot spots at the same time!'
    },
    {
      icon: 'BiUserPlus',
      title: 'YouTube Subscribers',
      description: `Subscriber count is an important indicator of a YouTube content creator's influence. We will customize a subscriber growth plan for you, using precise seeding marketing and traffic-driving interactions to continuously accumulate a loyal fan base, ensuring more viewers stay updated on your high-quality content.`
    },
    {
      icon: 'BiVideo',
      title: 'YouTube Views',
      description:
        'To gain enough exposure on YouTube, outstanding creativity alone is not enough. We will customize a view-boosting plan for you, using precise seeding promotion and continuous heat maintenance strategies to steadily accumulate exposure, ensuring your work reaches more like-minded viewers.'
    },
    {
      icon: 'BiMessageDetail',
      title: 'YouTube Comments',
      description:
        'On YouTube, comment interaction is the key for content creators to connect with their audience. We will customize a comment-driving plan for you, using manual seeding interactions and event planning to continuously accumulate positive comments, enhancing your engagement with fans.'
    },
    {
      icon: 'BiPlusMedical',
      title: 'YouTube More',
      description:
        'Our professional YouTube promotion service will comprehensively help you shine on this platform. Through precise traffic seeding, popular event interactions, and continuous heat maintenance, we will provide you with uninterrupted popularity momentum, allowing more viewers to appreciate your outstanding creativity.'
    }
  ],
  faqs: [
    {
      title: 'Does buying subscribers violate YouTube policy?',
      content:
        'Absolutely not. YouTube will not delete your subscribers or ban your account just because you have subscribers.'
    },
    {
      title: 'How long does it take to get the subscribers?',
      content:
        'This depends on the inventory and the number of subscribers you want to obtain. When you enter the desired quantity, you will see the estimated time.'
    },
    {
      title: 'How soon can I see the results after starting the YouTube promotion?',
      content:
        'The time it takes to see the results depends on various factors, including the type of promotion and your target audience. In most cases, you can start seeing the effects within a few days.'
    },
    {
      title: 'Is it safe to use the YouTube promotion service?',
      content:
        'Absolutely safe. We value your privacy and account security, and we will not ask for your account password or other sensitive information. All transactions are conducted through secure payment methods.'
    },
    {
      title: 'Can I promote the works I like?',
      content: 'Absolutely! Let more people know and follow the works you love!'
    },
    {
      title: 'If I am not satisfied with the YouTube promotion service, can I request a refund?',
      content:
        'We promise a satisfaction guarantee. If the expected results are not achieved within the agreed time, we will provide a refund or additional services to compensate.'
    },
    {
      title: 'Are many people using the YouTube promotion service?',
      content: `It is very common, as if you buy views, you will achieve your goals in a very short time. That's why many individuals and businesses prefer to buy views.`
    }
  ]
}

const JP = {
  hero: {
    title: 'YouTube広告',
    description: `この動画コンテンツが活況を呈する時代において、YouTubeはクリエイターが自身の才能を発揮する絶好の舞台となっています。ライフスタイルのVlogger、ゲーミングの専門家、知識共有の熱心な人など、このプラットフォームで人気で影響力のある個人チャンネルを持つことが、コンテンツを収益化する確かな鍵となっています。しかし、優れたコンテンツ制作だけでは十分ではありません。膨大な動画の海の中で、あなたのコンテンツが際立つためには、専門的な宣伝力も必要なのです。`,
    title1: 'YouTube',
    btn: '今すぐ購入',
    image: imageUrl
  },
  productsTitle: 'YouTubeサービス',
  products: [
    {
      icon: 'BiSolidLike',
      title: 'YouTubeビデオ「いいね」',
      description:
        '広大なYouTubeプラットフォームで長続きの人気を得るのは簡単ではありません。私たちの「いいね」プロモーションサービスは、大規模な種まき戦略などのマーケティング手法を使って、あなたの高品質なコンテンツに活力を注ぎ、好評価を継続的に築き上げ、より同じ志向の視聴者に創造性を認めてもらえるようにします。'
    },
    {
      icon: 'BiDislike',
      title: 'YouTubeビデオ「嫌い」',
      description:
        'YouTube上で話題を呼び、ライバルの影響力を減らしたいですか? YouTubeビデオ「嫌い」サービスが必要です!世論を喚起し、ホットスポットを作り出しましょう!'
    },
    {
      icon: 'BiUserPlus',
      title: 'YouTubeチャンネル登録者',
      description:
        'チャンネル登録者数はYouTubeクリエイターの影響力を示す重要な指標です。私たちは、精密なシード マーケティングや視聴者誘導型のインタラクションを使って、あなたのチャンネル登録者を継続的に増やす計画を立てます。これにより、より多くの視聴者があなたの高品質なコンテンツを最新の状態で知ることができるようになります。'
    },
    {
      icon: 'BiVideo',
      title: 'YouTubeビデオ視聴回数',
      description:
        'YouTubeで十分な露出を得るには、優れた創造性だけでは不十分です。私たちは、精密なシード プロモーションや継続的な盛り上がり維持戦略を使って、あなたのビデオ視聴回数を着実に増やす計画を立てます。これにより、あなたの作品がより多くの志を同じくする視聴者に届くようになります。'
    },
    {
      icon: 'BiMessageDetail',
      title: 'YouTubeコメント',
      description:
        'YouTubeでは、コメントのやり取りがクリエイターと視聴者をつなぐ鍵となります。私たちは、手作業によるシード型のインタラクションやイベント企画を使って、あなたのチャンネルに継続的に好意的なコメントを集めていく計画を立てます。これにより、ファンとのエンゲージメントが高まります。'
    },
    {
      icon: 'BiPlusMedical',
      title: 'その他のYouTubeサービス',
      description:
        '私たちの専門的なYouTube広告サービスは、このプラットフォームであなたを輝かせるために包括的にサポートします。精密なトラフィック シード、人気イベントとのコラボ、継続的な盛り上がり維持など、私たちはあなたに途切れることのない人気の勢いを与え、より多くの視聴者があなたの優れた創造性を評価できるようにします。'
    }
  ],
  faqs: [
    {
      title: 'チャンネル登録者を購入するとYouTubeのポリシー違反になりますか?',
      content:
        'まったく違反しません。YouTubeはチャンネル登録者がいるからといって、登録者を削除したりアカウントを停止したりすることはありません。'
    },
    {
      title: 'チャンネル登録者を取得するまでにどのくらい時間がかかりますか?',
      content:
        '在庫状況と取得したいチャンネル登録者数によって異なります。希望数を入力すると、おおよその所要時間が表示されます。'
    },
    {
      title: 'YouTubeの広告を始めてからどのくらいで効果が出ますか?',
      content:
        '効果が出るまでの時間は、広告の種類やターゲット層など、さまざまな要因によって異なります。ほとんどの場合、数日以内に効果が現れ始めます。'
    },
    {
      title: 'YouTubeの広告サービスは安全ですか?',
      content:
        '完全に安全です。私たちはあなたのプライバシーとアカウントのセキュリティを大切にしており、パスワードや機密情報を聞くことはありません。すべての取引は安全な支払い方法で行われます。'
    },
    {
      title: '自分の好きな作品を宣伝することはできますか?',
      content: 'もちろんです! 好きな作品をより多くの人に知ってもらい、フォローしてもらいましょう!'
    },
    {
      title: 'YouTubeの広告サービスに満足できない場合、返金は可能ですか?',
      content:
        '満足保証をお約束します。合意した期間内に期待通りの結果が得られない場合は、返金または追加サービスをご提供します。'
    },
    {
      title: 'YouTubeの広告サービスを利用する人は多いですか?',
      content: `非常に一般的です。視聴回数を購入すれば、非常に短期間で目標を達成できるからです。そのため、多くの個人や企業がビュー数の購入を好んでいます。`
    }
  ]
}

const RU = {
  hero: {
    title: 'Покупка',
    description: `В эту эпоху процветающего видеоконтента YouTube стал идеальной сценой для творцов, чтобы продемонстрировать свои таланты. Будь вы lifestyle-влогер, игровой эксперт или энтузиаст по распространению знаний, иметь популярный и влиятельный личный канал на этой платформе, несомненно, является ключом к монетизации вашего контента. Однако одного лишь выдающегося создания контента далеко недостаточно. Вам также необходима профессиональная сила продвижения, чтобы помочь вашему контенту выделиться в огромном море видео!`,
    title1: 'YouTube',
    btn: 'Купить сейчас',
    image: imageUrl
  },
  productsTitle: 'Услуги YouTube',
  products: [
    {
      icon: 'BiSolidLike',
      title: 'Лайки к видео на YouTube',
      description:
        'Завоевать длительную популярность на обширной платформе YouTube - непростая задача. Наша услуга продвижения лайков вдохнет жизнь в ваш высококачественный контент, используя крупномасштабное распространение и другие маркетинговые тактики для непрерывного создания положительной репутации, позволяя все большему числу единомышленников оценить вашу креативность.'
    },
    {
      icon: 'BiDislike',
      title: 'Дизлайки к видео на YouTube',
      description:
        'Хотите создать ажиотаж и снизить влияние ваших конкурентов на YouTube? Вам нужна услуга "Дизлайки к видео на YouTube"! Зажгите общественное мнение и создавайте горячие точки одновременно!'
    },
    {
      icon: 'BiUserPlus',
      title: 'Подписчики YouTube',
      description:
        'Количество подписчиков - важный показатель влияния создателя контента на YouTube. Мы разработаем для вас индивидуальный план по наращиванию подписчиков, используя точечный маркетинг и взаимодействие, направленное на привлечение трафика, чтобы непрерывно наращивать лояльную фан-базу и гарантировать, что больше зрителей будут в курсе ваших высококачественных материалов.'
    },
    {
      icon: 'BiVideo',
      title: 'Просмотры YouTube',
      description:
        'Чтобы получить достаточное внимание на YouTube, одной выдающейся креативности недостаточно. Мы разработаем для вас индивидуальный план по наращиванию просмотров, используя точечное продвижение и стратегии непрерывной поддержки активности, чтобы постепенно наращивать охват и гарантировать, что ваша работа достигнет большего числа единомышленников.'
    },
    {
      icon: 'BiMessageDetail',
      title: 'Комментарии YouTube',
      description:
        'На YouTube взаимодействие через комментарии является ключом для создателей контента, чтобы связаться со своей аудиторией. Мы разработаем для вас индивидуальный план по наращиванию комментариев, используя ручные взаимодействия и планирование мероприятий, чтобы непрерывно накапливать положительные комментарии и повышать вашу вовлеченность с фанатами.'
    },
    {
      icon: 'BiPlusMedical',
      title: 'Другие услуги YouTube',
      description:
        'Наша профессиональная услуга продвижения на YouTube всесторонне поможет вам засиять на этой платформе. Благодаря точечному распространению трафика, взаимодействию с популярными мероприятиями и непрерывному поддержанию активности, мы обеспечим вас непрерывным импульсом популярности, позволяя все большему числу зрителей оценить ваше выдающееся творчество.'
    }
  ],
  faqs: [
    {
      title: 'Нарушает ли покупка подписчиков политику YouTube?',
      content:
        'Абсолютно нет. YouTube не будет удалять ваших подписчиков или блокировать ваш аккаунт только из-за того, что у вас есть подписчики.'
    },
    {
      title: 'Сколько времени займет получение подписчиков?',
      content:
        'Это зависит от наличия и количества подписчиков, которых вы хотите получить. Когда вы введете желаемое количество, вы увидите примерное время.'
    },
    {
      title: 'Как скоро я увижу результаты после начала продвижения на YouTube?',
      content:
        'Время, необходимое для получения результатов, зависит от различных факторов, включая тип продвижения и вашу целевую аудиторию. В большинстве случаев вы сможете увидеть эффект в течение нескольких дней.'
    },
    {
      title: 'Безопасно ли использовать услугу продвижения на YouTube?',
      content:
        'Абсолютно безопасно. Мы ценим вашу конфиденциальность и безопасность аккаунта и не будем запрашивать ваш пароль или другую конфиденциальную информацию. Все транзакции проводятся через безопасные платежные методы.'
    },
    {
      title: 'Могу ли я продвигать понравившиеся мне работы?',
      content: 'Конечно! Пусть больше людей узнают и следят за работами, которые вам нравятся!'
    },
    {
      title:
        'Если я не удовлетворен услугой продвижения на YouTube, могу ли я запросить возврат средств?',
      content:
        'Мы гарантируем удовлетворение. Если ожидаемые результаты не будут достигнуты в согласованные сроки, мы предоставим возврат средств или дополнительные услуги в качестве компенсации.'
    },
    {
      title: 'Многие ли люди используют услугу продвижения на YouTube?',
      content: `Это очень распространенная практика, ведь если вы покупаете просмотры, вы достигнете своих целей в очень короткие сроки. Вот почему многие частные лица и компании предпочитают покупать просмотры.`
    }
  ]
}

const AR = {
  hero: {
    title: 'الشراء',
    description: `في هذا العصر المزدهر للمحتوى المرئي، أصبح YouTube المنصة المثالية للمبدعين لإظهار مواهبهم. سواء كنت مدوّنًا للأسلوب الحياتي أو خبيرًا في الألعاب أو متحمسًا لمشاركة المعرفة، فإن امتلاك قناة شخصية شعبية ومؤثرة على هذه المنصة هو بلا شك المفتاح لتحقيق ربحية من محتواك. ومع ذلك، فإن إنشاء محتوى متميز وحده لا يكفي. أنت بحاجة أيضًا إلى قوة الترويج المهنية لمساعدة محتواك على الظهور بشكل بارز في بحر الفيديوهات الهائل!`,
    title1: 'YouTube',
    btn: 'اشتر الآن',
    image: imageUrl
  },
  productsTitle: 'خدمات YouTube',
  products: [
    {
      icon: 'BiSolidLike',
      title: 'إعجابات فيديوهات YouTube',
      description:
        'الحصول على شعبية دائمة على منصة YouTube الشاسعة ليس بالأمر السهل. ستحقن خدمة ترويج الإعجابات الخاصة بنا حيوية في محتواك عالي الجودة، باستخدام التسويق على نطاق واسع وغيرها من الأساليب التسويقية لبناء سمعة إيجابية بشكل مستمر، مما يتيح لمزيد من المستخدمين المتشابهين في الاهتمامات تقدير إبداعك.'
    },
    {
      icon: 'BiDislike',
      title: 'عدم إعجابات فيديوهات YouTube',
      description:
        'هل تريد إثارة الجدل وتقليل تأثير منافسيك على YouTube؟ أنت بحاجة إلى خدمة "عدم إعجابات فيديوهات YouTube"! أشعل الرأي العام وأنشئ نقاط ساخنة في نفس الوقت!'
    },
    {
      icon: 'BiUserPlus',
      title: 'مشتركون على YouTube',
      description:
        'عدد المشتركين هو مؤشر مهم على تأثير منشئ المحتوى على YouTube. سنقوم بتخصيص خطة نمو المشتركين لك، باستخدام التسويق المستهدف والتفاعلات التي تجذب الحركة المرورية لتراكم قاعدة جماهيرية مخلصة بشكل مستمر، مما يضمن بقاء المزيد من المشاهدين على اطلاع على محتواك عالي الجودة.'
    },
    {
      icon: 'BiVideo',
      title: 'مشاهدات YouTube',
      description:
        'للحصول على قدر كاف من التعرض على YouTube، فإن الإبداع المتميز وحده ليس كافيًا. سنقوم بتخصيص خطة لزيادة المشاهدات لك، باستخدام الترويج المستهدف واستراتيجيات الحفاظ على الحرارة المستمرة لتراكم التعرض بشكل ثابت، مما يضمن وصول عملك إلى المزيد من المشاهدين المتشابهين في الاهتمامات.'
    },
    {
      icon: 'BiMessageDetail',
      title: 'تعليقات YouTube',
      description:
        'على YouTube، تعتبر التفاعل من خلال التعليقات هي المفتاح لمنشئي المحتوى للتواصل مع جمهورهم. سنقوم بتخصيص خطة لزيادة التعليقات لك، باستخدام التفاعلات اليدوية وتخطيط الأحداث لتراكم التعليقات الإيجابية بشكل مستمر، مما يعزز مشاركتك مع المعجبين.'
    },
    {
      icon: 'BiPlusMedical',
      title: 'المزيد من خدمات YouTube',
      description:
        'ستساعدك خدمة الترويج المحترفة على YouTube بشكل شامل لتتألق على هذه المنصة. من خلال البذر الدقيق للحركة المرورية والتفاعل مع الأحداث الشعبية والصيانة المستمرة للنشاط، سنوفر لك زخم الشعبية المستمر، مما يتيح لمزيد من المشاهدين تقدير إبداعك المتميز.'
    }
  ],
  faqs: [
    {
      title: 'هل يخالف شراء المشتركين سياسة YouTube؟',
      content: 'بالتأكيد لا. لن يقوم YouTube بحذف مشتركيك أو حظر حسابك مجرد لأنك لديك مشتركون.'
    },
    {
      title: 'كم من الوقت يستغرق الحصول على المشتركين؟',
      content:
        'هذا يعتمد على المخزون وعدد المشتركين الذين تريد الحصول عليهم. عند إدخال الكمية المرغوبة، ستشاهد الوقت المقدر.'
    },
    {
      title: 'متى يمكنني رؤية النتائج بعد بدء الترويج على YouTube؟',
      content:
        'يعتمد الوقت اللازم لرؤية النتائج على عوامل متعددة، بما في ذلك نوع الترويج وجمهورك المستهدف. في معظم الحالات، يمكنك البدء في رؤية التأثيرات في غضون أيام قليلة.'
    },
    {
      title: 'هل من الآمن استخدام خدمة الترويج على YouTube؟',
      content:
        'آمن تمامًا. نحن نقدر خصوصيتك وأمن حسابك، ولن نطلب كلمة مرور حسابك أو معلومات حساسة أخرى. تتم جميع المعاملات من خلال طرق دفع آمنة.'
    },
    {
      title: 'هل يمكنني الترويج للأعمال التي أحبها؟',
      content: 'بالتأكيد! دع المزيد من الناس يعرفون ويتابعون الأعمال التي تحبها!'
    },
    {
      title: 'إذا لم أكن راضيًا عن خدمة الترويج على YouTube ، هل يمكنني طلب استرداد؟',
      content:
        'نحن نضمن ضمان الرضا. إذا لم يتم تحقيق النتائج المتوقعة في الوقت المتفق عليه، فسنقدم استرداد أو خدمات إضافية للتعويض.'
    },
    {
      title: 'هل يستخدم الكثير من الناس خدمة الترويج على YouTube؟',
      content: `إنه أمر شائع جدًا ، فإذا كنت تشتري مشاهدات ، ستحقق أهدافك في وقت قصير جدًا. لهذا السبب يفضل العديد من الأفراد والشركات شراء المشاهدات.`
    }
  ]
}

export interface collection {
  [key: string]: shopConfig
}

export const ALL_YOUTUBE: collection = {
  EN,
  ZH,
  JP,
  RU,
  AR
}
