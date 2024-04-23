import { shopConfig } from '@/types/shop'

const imageUrl = '/images/medias/other.png'

const ZH = {
  hero: {
    title: '购买',
    description: `身为一名优秀的内容创作者,你是否也曾觉得自己的佳作被深埋在了信息的海洋中?你是否也渴望在Medium这个优质内容社区中获得应有的关注和赞赏?现在,就让我们的Medium推广服务助你一臂之力,助力你的作品在这里绽放夺目光芒!`,
    title1: 'Medium',
    btn: '立即购买',
    image: imageUrl
  },
  productsTitle: 'Medium 服务',
  products: [
    {
      icon: 'BiMessageSquareDetail',
      title: 'Medium Comments',
      description:
        '提升您的Medium内容的互动性!我们的服务可以为您带来高质量的评论,让您的文章在Medium上获得更多关注和参与。通过精心设计的评论,您可以与读者建立更紧密的联系,增强品牌知名度和影响力。'
    },
    {
      icon: 'BiGroup',
      title: 'Medium Followers',
      description:
        '扩大您在Medium上的影响力,吸引更多忠实读者!我们的服务可以为您带来高质量的关注者,让您的内容触达更广泛的受众。通过精心策划的关注者群体,您可以提高内容的曝光率和互动性,从而提升您在Medium上的地位。'
    },
    {
      icon: 'BiLike',
      title: 'Medium Likes',
      description:
        '让您的Medium内容获得更多赞赏!我们的服务可以为您带来高质量的点赞,提升您文章的受欢迎程度和可信度。通过精心设计的点赞策略,您可以吸引更多读者关注您的内容,提高在Medium上的影响力。'
    },
    {
      icon: 'BiAnalyse',
      title: 'Medium Views',
      description:
        '提升您的Medium内容的曝光率!我们的服务可以为您带来高质量的浏览量,让更多读者发现并阅读您的文章。通过精心优化的推广策略,您可以吸引更多潜在读者,提高内容的影响力和知名度。'
    },
    {
      icon: 'BiShareAlt',
      title: 'Medium Shares',
      description:
        '扩大您在Medium上的影响力,让您的内容被更多人看到!我们的服务可以为您带来高质量的分享,让您的文章在各大社交平台上获得更多曝光。通过精心设计的分享策略,您可以触达更广泛的受众群体,提高品牌知名度和影响力。'
    },
    {
      icon: 'BiPlusMedical',
      title: 'Medium More',
      description:
        '全方位提升您在Medium上的表现!除了评论、关注者、点赞、浏览量和分享,我们还可以为您提供其他增值服务,如内容优化、账号推广等,助力您在Medium上取得更大的成功。无论您的需求是什么,我们都将竭诚为您提供专业、高效的解决方案。'
    }
  ],
  faqs: [
    {
      title: '购买粉丝违反Medium政策吗？',
      content: '当然不会。Medium不会因为您有粉丝而删除粉丝或封禁您的账号。'
    },
    {
      title: '获得粉丝需要多长时间？',
      content:
        '这取决于库存情况和您想要获得的粉丝数量。当您输入您想要获得的数量时，您将看到预计时间。'
    },
    {
      title: '启动Medium推广后，多久能看到效果？',
      content:
        '效果的显现时间依赖于多种因素，包括您选择的推广类型和目标受众。大多数情况下，您可以在几天内开始看到推广效果。'
    },
    {
      title: '使用Medium推广服务安全吗？',
      content:
        '绝对安全。我们重视您的隐私和账户安全，不会索取您的账户密码或其他敏感信息。所有交易都通过安全的支付方式进行。'
    },
    {
      title: '我可以为我喜欢的作品进行推广吗？',
      content: '当然可以！，让你喜欢的作品能够让更多的人知道和关注！'
    },
    {
      title: '如果我对Medium推广服务不满意，能否申请退款？',
      content:
        '我们承诺提供满意保障。如果在约定时间内未达到预期效果，我们将提供退款或额外服务以补偿。'
    },
    {
      title: '许多人都在使用Medium推广服务吗？',
      content:
        '非常常见，因为如果您购买粉丝，您将在很短的时间内实现您的目标。这就是为什么许多个人和商业资料更喜欢购买粉丝。'
    }
  ]
}

const EN = {
  hero: {
    title: 'Purchase',
    description:
      'As a talented content creator, have you ever felt that your masterpieces were buried in the vast ocean of information? Do you also yearn for the attention and appreciation you deserve on the premium content community of Medium? Now, let our Medium promotion service lend you a helping hand, and help your work shine brightly on this platform!',
    title1: 'Medium',
    btn: 'Buy Now',
    image: imageUrl
  },
  productsTitle: 'Medium Services',
  products: [
    {
      icon: 'BiMessageSquareDetail',
      title: 'Medium Comments',
      description:
        "Enhance the interactivity of your Medium content! Our service can bring you high-quality comments, helping your articles gain more attention and engagement on Medium. Through carefully crafted comments, you can build stronger connections with your readers, and boost your brand's visibility and influence."
    },
    {
      icon: 'BiGroup',
      title: 'Medium Followers',
      description:
        'Expand your influence on Medium and attract more loyal readers! Our service can provide you with high-quality followers, allowing your content to reach a wider audience. Through a well-planned follower base, you can increase the exposure and engagement of your content, thereby enhancing your standing on Medium.'
    },
    {
      icon: 'BiLike',
      title: 'Medium Likes',
      description:
        'Help your Medium content receive more appreciation! Our service can bring you high-quality likes, boosting the popularity and credibility of your articles. Through a carefully designed like strategy, you can attract more readers to engage with your content, and increase your influence on Medium.'
    },
    {
      icon: 'BiAnalyse',
      title: 'Medium Views',
      description:
        'Increase the exposure of your Medium content! Our service can provide you with high-quality views, allowing more readers to discover and read your articles. Through a meticulously optimized promotion strategy, you can attract more potential readers and enhance the impact and visibility of your content.'
    },
    {
      icon: 'BiShareAlt',
      title: 'Medium Shares',
      description:
        "Expand your influence on Medium and let your content be seen by more people! Our service can provide you with high-quality shares, ensuring your articles gain more exposure across various social platforms. Through a carefully designed sharing strategy, you can reach a wider audience and improve your brand's visibility and influence."
    },
    {
      icon: 'BiPlusMedical',
      title: 'Medium More',
      description:
        'Comprehensively enhance your performance on Medium! In addition to comments, followers, likes, views, and shares, we can also provide you with other value-added services, such as content optimization and account promotion, to help you achieve greater success on Medium. Regardless of your needs, we will strive to provide you with professional and efficient solutions.'
    }
  ],
  faqs: [
    {
      title: "Does purchasing followers violate Medium's policies?",
      content:
        'Certainly not. Medium will not delete your followers or ban your account just because you have followers.'
    },
    {
      title: 'How long does it take to acquire followers?',
      content:
        'This depends on the availability of the stock and the number of followers you want to obtain. When you enter the desired quantity, you will see the estimated time.'
    },
    {
      title: 'How soon can I see the results after starting Medium promotion?',
      content:
        'The time it takes to see the results depends on various factors, including the type of promotion you choose and your target audience. In most cases, you can start seeing the effects of the promotion within a few days.'
    },
    {
      title: 'Is using the Medium promotion service safe?',
      content:
        'Absolutely safe. We value your privacy and account security, and we will not ask for your account password or other sensitive information. All transactions are conducted through secure payment methods.'
    },
    {
      title: 'Can I promote the works I like?',
      content: 'Certainly! Let your favorite works be known and followed by more people!'
    },
    {
      title: "If I'm not satisfied with the Medium promotion service, can I request a refund?",
      content:
        'We guarantee satisfaction. If the expected results are not achieved within the agreed time, we will provide a refund or additional services to compensate.'
    },
    {
      title: 'Are many people using the Medium promotion service?',
      content:
        'It is very common, as if you purchase followers, you will achieve your goals in a very short time. This is why many individuals and businesses prefer to buy followers.'
    }
  ]
}

const JP = {
  hero: {
    title: '購入',
    description:
      'コンテンツクリエイターとして、あなたの傑作が膨大な情報の海に埋もれていると感じたことはありませんか? また、Medium上の優れたコンテンツコミュニティで、あなたが受けるべき注目と評価を求めていませんか? 今、私たちのMedium プロモーションサービスがあなたの手助けをさせていただきます。このプラットフォームであなたの作品を輝かせましょう!',
    title1: 'Medium',
    btn: '今すぐ購入',
    image: imageUrl
  },
  productsTitle: 'Mediumサービス',
  products: [
    {
      icon: 'BiMessageSquareDetail',
      title: 'Mediumコメント',
      description:
        'Mediumコンテンツの対話性を高めましょう! 当社のサービスは高品質なコメントをお届けし、あなたの記事がMedium上でより多くの注目と関与を集めるのを助けます。丁寧に作られたコメントを通じて、読者との絆を深め、ブランドの知名度と影響力を高めることができます。'
    },
    {
      icon: 'BiGroup',
      title: 'Mediumフォロワー',
      description:
        'Mediumでの影響力を広げ、より多くの熱心な読者を引き付けましょう! 当社のサービスは高品質なフォロワーを提供し、あなたのコンテンツがより広い読者層に届くようにします。適切なフォロワーベースを構築することで、コンテンツの露出と関与を高め、Mediumでの地位を高めることができます。'
    },
    {
      icon: 'BiLike',
      title: 'Mediumいいね',
      description:
        'Mediumコンテンツがより多くの評価を受けるよう支援しましょう! 当社のサービスは高品質ないいねを提供し、あなたの記事の人気と信頼性を高めます。慎重に設計されたいいね戦略を通じて、より多くの読者にコンテンツに関与してもらい、Mediumでの影響力を高めることができます。'
    },
    {
      icon: 'BiAnalyse',
      title: 'Mediumビュー',
      description:
        'Mediumコンテンツの露出を高めましょう! 当社のサービスは高品質なビューを提供し、より多くの読者にあなたの記事を発見してもらえるようにします。慎重に最適化されたプロモーション戦略を通じて、潜在的な読者を引き付け、コンテンツの影響力と可視性を高めることができます。'
    },
    {
      icon: 'BiShareAlt',
      title: 'Mediumシェア',
      description:
        'Mediumでの影響力を広げ、あなたのコンテンツをより多くの人に見てもらいましょう! 当社のサービスは高品質なシェアを提供し、あなたの記事が様々なソーシャルプラットフォームで多くの露出を得られるようにします。慎重に設計されたシェア戦略を通じて、より広範な読者層に到達し、ブランドの知名度と影響力を高めることができます。'
    },
    {
      icon: 'BiPlusMedical',
      title: 'Mediumその他',
      description:
        'Mediumでの実績を総合的に高めましょう! コメント、フォロワー、いいね、ビュー、シェアに加えて、コンテンツの最適化やアカウントのプロモーションなど、付加価値の高いサービスも提供しています。ニーズに応じて、プロフェッショナルで効率的なソリューションをご提供します。'
    }
  ],
  faqs: [
    {
      title: 'Mediumのポリシーに違反してフォロワーを購入することはありますか?',
      content:
        '全くありません。Mediumはあなたがフォロワーを持っているからといって、フォロワーを削除したり、アカウントを禁止したりすることはありません。'
    },
    {
      title: 'フォロワーを獲得するにはどのくらいの時間がかかりますか?',
      content:
        'これは在庫の状況と欲しいフォロワーの数によって異なります。希望の数量を入力すると、見積もり時間が表示されます。'
    },
    {
      title: 'Mediumプロモーションを開始してからどのくらいで効果が出ますか?',
      content:
        '結果が出るまでの時間は、選択したプロモーションの種類や対象読者によって異なります。ほとんどの場合、数日以内に効果が現れ始めます。'
    },
    {
      title: 'Mediumプロモーションサービスは安全ですか?',
      content:
        '完全に安全です。お客様のプライバシーとアカウントのセキュリティを大切にしており、パスワードやその他の機密情報をお聞きすることはありません。すべての取引は安全な支払い方法で行われます。'
    },
    {
      title: '気に入った作品を宣伝することはできますか?',
      content:
        'もちろんです! お気に入りの作品をより多くの人に知ってもらい、フォロワーを増やしましょう!'
    },
    {
      title: 'Mediumプロモーションサービスに満足できない場合、返金は可能ですか?',
      content:
        'お客様の満足を保証します。合意した期間内に期待通りの結果が得られない場合は、返金または追加サービスでご補償いたします。'
    },
    {
      title: 'Mediumプロモーションサービスを利用している人は多いですか?',
      content:
        '非常に一般的です。フォロワーを購入すれば、短期間で目標を達成できるため、多くの個人や企業がこのサービスを利用しています。'
    }
  ]
}

const RU = {
  hero: {
    title: 'Покупка',
    description:
      'Вы талантливый создатель контента, но чувствуете, что ваши шедевры затерялись в океане информации? Вы также жаждете внимания и признания, которых заслуживаете на премиальном сообществе контента Medium? Теперь наша служба продвижения Medium поможет вам, и ваша работа засияет ярко на этой платформе!',
    title1: 'Medium',
    btn: 'Купить сейчас',
    image: imageUrl
  },
  productsTitle: 'Услуги Medium',
  products: [
    {
      icon: 'BiMessageSquareDetail',
      title: 'Комментарии в Medium',
      description:
        'Повысьте интерактивность вашего контента в Medium! Наша услуга может принести вам высококачественные комментарии, помогая вашим статьям получать больше внимания и вовлеченности на Medium. Благодаря тщательно продуманным комментариям вы можете установить более прочные связи со своими читателями и повысить видимость и влияние вашего бренда.'
    },
    {
      icon: 'BiGroup',
      title: 'Подписчики в Medium',
      description:
        'Расширьте свое влияние в Medium и привлеките больше преданных читателей! Наша услуга может предоставить вам высококачественных подписчиков, позволяя вашему контенту достичь более широкой аудитории. Благодаря хорошо продуманной базе подписчиков вы можете увеличить охват и вовлеченность вашего контента, тем самым повысив ваш авторитет на Medium.'
    },
    {
      icon: 'BiLike',
      title: 'Лайки в Medium',
      description:
        'Помогите вашему контенту в Medium получать больше признания! Наша услуга может принести вам высококачественные лайки, повышая популярность и достоверность ваших статей. Благодаря тщательно разработанной стратегии лайков вы можете привлечь больше читателей к взаимодействию с вашим контентом и увеличить свое влияние на Medium.'
    },
    {
      icon: 'BiAnalyse',
      title: 'Просмотры в Medium',
      description:
        'Увеличьте охват вашего контента в Medium! Наша услуга может предоставить вам высококачественные просмотры, позволяя большему количеству читателей обнаруживать и читать ваши статьи. Благодаря тщательно оптимизированной стратегии продвижения вы можете привлечь больше потенциальных читателей и повысить воздействие и видимость вашего контента.'
    },
    {
      icon: 'BiShareAlt',
      title: 'Репосты в Medium',
      description:
        'Расширьте свое влияние в Medium и позвольте вашему контенту быть увиденным большим количеством людей! Наша услуга может предоставить вам высококачественные репосты, обеспечивая, что ваши статьи получат больше охвата на различных социальных платформах. Благодаря тщательно разработанной стратегии распространения вы можете достичь более широкой аудитории и улучшить видимость и влияние вашего бренда.'
    },
    {
      icon: 'BiPlusMedical',
      title: 'Дополнительные услуги в Medium',
      description:
        'Комплексно улучшите свою производительность на Medium! Помимо комментариев, подписчиков, лайков, просмотров и репостов, мы также можем предоставить вам другие дополнительные услуги, такие как оптимизация контента и продвижение аккаунта, чтобы помочь вам добиться большего успеха на Medium. Независимо от ваших потребностей, мы будем стремиться предоставить вам профессиональные и эффективные решения.'
    }
  ],
  faqs: [
    {
      title: 'Нарушает ли покупка подписчиков политику Medium?',
      content:
        'Конечно, нет. Medium не удалит ваших подписчиков и не заблокирует ваш аккаунт только потому, что у вас есть подписчики.'
    },
    {
      title: 'Как долго занимает приобретение подписчиков?',
      content:
        'Это зависит от наличия запасов и количества подписчиков, которых вы хотите получить. Когда вы введете желаемое количество, вы увидите примерное время.'
    },
    {
      title: 'Как скоро я увижу результаты после начала продвижения в Medium?',
      content:
        'Время, необходимое для получения результатов, зависит от различных факторов, включая тип выбранного продвижения и целевую аудиторию. В большинстве случаев вы можете начать видеть эффекты продвижения в течение нескольких дней.'
    },
    {
      title: 'Безопасно ли использовать службу продвижения Medium?',
      content:
        'Абсолютно безопасно. Мы ценим вашу конфиденциальность и безопасность аккаунта, и мы не будем запрашивать ваш пароль от аккаунта или другую конфиденциальную информацию. Все транзакции проводятся через безопасные платежные методы.'
    },
    {
      title: 'Могу ли я продвигать понравившиеся работы?',
      content:
        'Конечно! Позвольте вашим любимым работам быть известными и отслеживаемыми большим количеством людей!'
    },
    {
      title:
        'Если я не удовлетворен службой продвижения Medium, могу ли я запросить возврат средств?',
      content:
        'Мы гарантируем удовлетворенность. Если ожидаемые результаты не будут достигнуты в согласованные сроки, мы предоставим возврат средств или дополнительные услуги в качестве компенсации.'
    },
    {
      title: 'Многие ли люди используют службу продвижения Medium?',
      content:
        'Это очень распространено, так как если вы покупаете подписчиков, вы достигнете своих целей в очень короткие сроки. Вот почему многие частные лица и компании предпочитают покупать подписчиков.'
    }
  ]
}

const AR = {
  hero: {
    title: 'شراء',
    description:
      'كمنشئ محتوى موهوب، هل شعرت من قبل أن إبداعاتك كانت مدفونة في المحيط الواسع من المعلومات؟ هل تتطلع أيضًا إلى الاهتمام والتقدير الذي تستحقه على منصة المحتوى المميزة Medium؟ الآن، دعنا نساعدك من خلال خدمة ترويج Medium، ونساعد عملك في الإشراق بشكل لافت على هذه المنصة!',
    title1: 'Medium',
    btn: 'اشتر الآن',
    image: imageUrl
  },
  productsTitle: 'خدمات Medium',
  products: [
    {
      icon: 'BiMessageSquareDetail',
      title: 'تعليقات Medium',
      description:
        'عزز التفاعلية في محتوى Medium الخاص بك! يمكن أن توفر لك خدمتنا تعليقات عالية الجودة، مما يساعد على جذب المزيد من الاهتمام والمشاركة على Medium. من خلال التعليقات المصممة بعناية، يمكنك بناء روابط أقوى مع قرائك، وتعزيز رؤية علامتك التجارية وتأثيرها.'
    },
    {
      icon: 'BiGroup',
      title: 'متابعو Medium',
      description:
        'وسّع نفوذك على Medium واجذب المزيد من القراء الموالين! يمكن أن توفر لك خدمتنا متابعين عالي الجودة، مما يسمح لمحتواك بالوصول إلى جمهور أوسع. من خلال قاعدة متابعين جيدة التخطيط، يمكنك زيادة التعرض والمشاركة في محتواك، وبالتالي تعزيز مكانتك على Medium.'
    },
    {
      icon: 'BiLike',
      title: 'إعجابات Medium',
      description:
        'ساعد محتوى Medium الخاص بك على تلقي المزيد من التقدير! يمكن أن توفر لك خدمتنا إعجابات عالية الجودة، مما يعزز شعبية ومصداقية مقالاتك. من خلال استراتيجية إعجابات مصممة بعناية، يمكنك جذب المزيد من القراء للمشاركة في محتواك، وزيادة نفوذك على Medium.'
    },
    {
      icon: 'BiAnalyse',
      title: 'مشاهدات Medium',
      description:
        'زِد من تعرض محتوى Medium الخاص بك! يمكن أن توفر لك خدمتنا مشاهدات عالية الجودة، مما يتيح لمزيد من القراء اكتشاف وقراءة مقالاتك. من خلال استراتيجية ترويج محسّنة بعناية، يمكنك جذب المزيد من القراء المحتملين وتعزيز تأثير ورؤية محتواك.'
    },
    {
      icon: 'BiShareAlt',
      title: 'مشاركات Medium',
      description:
        'وسّع نفوذك على Medium واجعل محتواك يُرى من قبل المزيد من الناس! يمكن أن توفر لك خدمتنا مشاركات عالية الجودة، مما يضمن حصول مقالاتك على المزيد من التعرض عبر منصات التواصل الاجتماعي المختلفة. من خلال استراتيجية مشاركة مصممة بعناية، يمكنك الوصول إلى جمهور أوسع وتحسين رؤية علامتك التجارية وتأثيرها.'
    },
    {
      icon: 'BiPlusMedical',
      title: 'المزيد من Medium',
      description:
        'عزّز أدائك على Medium بشكل شامل! بالإضافة إلى التعليقات والمتابعين والإعجابات والمشاهدات والمشاركات، يمكننا أيضًا توفير لك خدمات إضافية ذات قيمة، مثل تحسين المحتوى وترويج الحساب، لمساعدتك على تحقيق نجاح أكبر على Medium. بغض النظر عن احتياجاتك، سنسعى جاهدين لتوفير حلول احترافية وفعالة لك.'
    }
  ],
  faqs: [
    {
      title: 'هل شراء المتابعين ينتهك سياسات Medium؟',
      content: 'بالتأكيد لا. لن يقوم Medium بحذف متابعيك أو حظر حسابك مجرد لأنك لديك متابعون.'
    },
    {
      title: 'كم من الوقت يستغرق الحصول على متابعين؟',
      content:
        'هذا يعتمد على توفر المخزون والعدد من المتابعين الذين تريد الحصول عليهم. عند إدخال الكمية المطلوبة، ستشاهد التوقيت المقدر.'
    },
    {
      title: 'متى يمكنني رؤية النتائج بعد بدء ترويج Medium؟',
      content:
        'الوقت اللازم لرؤية النتائج يعتمد على عوامل مختلفة، بما في ذلك نوع الترويج الذي تختاره وجمهورك المستهدف. في معظم الحالات، يمكنك البدء في رؤية آثار الترويج خلال بضعة أيام.'
    },
    {
      title: 'هل استخدام خدمة ترويج Medium آمن؟',
      content:
        'آمن تمامًا. نحن نقدر خصوصيتك وأمن حسابك، ولن نطلب منك كلمة مرور الحساب أو معلومات حساسة أخرى. تتم جميع المعاملات من خلال طرق دفع آمنة.'
    },
    {
      title: 'هل يمكنني الترويج للأعمال التي أحبها؟',
      content: 'بالتأكيد! دع أعمالك المفضلة تكون معروفة ومتابعة من قبل المزيد من الناس!'
    },
    {
      title: 'إذا لم أكن راضيًا عن خدمة ترويج Medium، هل يمكنني طلب استرداد الأموال؟',
      content:
        'نحن نضمن الرضا. إذا لم يتم تحقيق النتائج المتوقعة في الوقت المتفق عليه، فسنقدم استرداد أموال أو خدمات إضافية للتعويض.'
    },
    {
      title: 'هل هناك الكثير من الناس الذين يستخدمون خدمة ترويج Medium؟',
      content:
        'هذا أمر شائع جدًا، فإذا قمت بشراء المتابعين، ستحقق أهدافك في وقت قصير جدًا. لهذا السبب يفضل العديد من الأفراد والشركات شراء المتابعين.'
    }
  ]
}

export interface collection {
  [key: string]: shopConfig
}

export const ALL_MEDIUM: collection = {
  EN,
  ZH,
  JP,
  RU,
  AR
}
