import { ALL_INSTAGRAM, collection } from './Instagram'

const ALL_SHOP: { [key: string]: collection } = {
  ALL_INSTAGRAM
}

export const getConfig = (type: string, lang: string) => {
  return ALL_SHOP[`ALL_${type.toUpperCase()}`][lang.toUpperCase()]
}
