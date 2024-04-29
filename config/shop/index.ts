import { ALL_DIGG } from './Digg'
import { ALL_DISCORD } from './Discord'
import { ALL_DRIBBBLE } from './Dribbble'
import { ALL_FACEBOOK } from './Facebook'
import { ALL_GOOGLE } from './Google'
import { ALL_IMDB } from './IMDB'
import { ALL_INSTAGRAM, collection } from './Instagram'
import { ALL_MEDIUM } from './Medium'
import { ALL_QUORA } from './Quora'
import { ALL_REDDIT } from './Reddit'
import { ALL_SNAPCHAT } from './Snapchat'
import { ALL_SPOTIFY } from './Spotify'
import { ALL_STEAM } from './Steam'
import { ALL_TELEGRAM } from './Telegram'
import { ALL_TUMBLR } from './Tumblr'
import { ALL_TWITCH } from './Twitch'
import { ALL_TWITTER } from './Twitter'
import { ALL_VK } from './VK'
import { ALL_VIMEO } from './Vimeo'
import { ALL_YOUTUBE } from './Youtube'

const ALL_SHOP: { [key: string]: collection } = {
  ALL_DIGG,
  ALL_DISCORD,
  ALL_DRIBBBLE,
  ALL_FACEBOOK,
  ALL_GOOGLE,
  ALL_IMDB,
  ALL_INSTAGRAM,
  ALL_MEDIUM,
  ALL_QUORA,
  ALL_REDDIT,
  ALL_SNAPCHAT,
  ALL_SPOTIFY,
  ALL_STEAM,
  ALL_TELEGRAM,
  ALL_TUMBLR,
  ALL_TWITCH,
  ALL_TWITTER,
  ALL_VIMEO,
  ALL_VK,
  ALL_YOUTUBE
}

export const getConfig = (type: string, lang: string) => {
  return ALL_SHOP[`ALL_${type.toUpperCase()}`][lang.toUpperCase()]
}
