/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://eviltraffic.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,

  additionalPaths: config => {
    const i18ns = ['en', 'zh', 'jp', 'ar', 'ru']
    const shops = [
      'Digg',
      'Discord',
      'Dribbble',
      'Facebook',
      'Google',
      'IMDB',
      'Instagram',
      'Medium',
      'Quora',
      'Reddit',
      'Snapchat',
      'Spotify',
      'Steam',
      'Telegram',
      'Tumblr',
      'Twitch',
      'Twitter',
      'Vimeo',
      'VK',
      'Youtube'
    ]

    const paths = []

    i18ns.forEach(i18n => {
      paths.push({
        loc: `/${i18n}`,
        changefreq: 'daily',
        priority: 0.7
      })
    })

    shops.forEach(shop => {
      paths.push(
        ...i18ns.map(i18n => ({
          loc: `/${i18n}/shop/${shop.toLowerCase()}`,
          changefreq: 'daily',
          priority: 0.7
        }))
      )
    })

    return paths
  }
}
