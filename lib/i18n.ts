import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export const locales = ['', 'en', 'en-US', 'zh', 'zh-CN', 'zh-TW', 'zh-HK', 'jp', 'ar', 'es', 'ru']
export const localeNames: any = {
  ar: '🇸🇦 العربية',
  en: '🇺🇸 English',
  // es: '🇪🇸 Español',
  jp: '🇯🇵 日本語',
  ru: '🇷🇺 Русский',
  zh: '🇨🇳 中文'
}
export const defaultLocale = 'en'

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
/**
 * 根据提供的HTTP头获取最匹配的本地化语言字符串。
 * @param headers 任意类型的HTTP头对象，通常用于提取客户端的Accept-Language头部信息。
 * @returns 返回一个字符串，表示与客户端最匹配的语言。
 */
export function getLocale(headers: any): string {
  // 使用Negotiator库从headers中解析出客户端支持的语言列表
  let languages = new Negotiator({ headers }).languages()

  // 根据解析出的语言列表，匹配可用的语言选项，返回最匹配的语言代码
  return match(languages, locales, defaultLocale)
}

const dictionaries: any = {
  en: () => import('@/locales/en.json').then(module => module.default),
  zh: () => import('@/locales/zh.json').then(module => module.default),
  jp: () => import('@/locales/ja.json').then(module => module.default),
  ar: () => import('@/locales/ar.json').then(module => module.default),
  es: () => import('@/locales/es.json').then(module => module.default),
  ru: () => import('@/locales/ru.json').then(module => module.default)
}

export const getDictionary = async (locale: string) => {
  if (['zh-CN', 'zh-TW', 'zh-HK'].includes(locale)) {
    locale = 'zh'
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = 'en'
  }

  return dictionaries[locale]()
}

export const getLanguage = (val: any) => {
  return val && typeof val === 'string' ? val : defaultLocale
}

/**
 * 从给定字符串中提取本地化标识符
 * @param str 需要解析以提取本地化标识符的字符串
 * @returns 返回匹配到的本地化标识符，如果没有匹配到则返回'
 */
export function extractLocale(str: string) {
  if (str === '/') {
    return defaultLocale
  }

  // 使用正则表达式来匹配字符串，以提取本地化标识符
  const regex = /^\/(\w+)(?:\/.*)?$/
  const match = str.match(regex) // 尝试用正则表达式匹配字符串

  if (match) {
    // 如果匹配成功，返回本地化标识符
    return match[1]
  } else {
    // 如果没有匹配到，返回null
    return ''
  }
}
