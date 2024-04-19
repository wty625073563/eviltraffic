'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useParams, usePathname, useRouter } from 'next/navigation'

import { defaultLocale, localeNames } from '@/lib/i18n'

export const LangSwitcher = () => {
  const params = useParams()
  const lang = params.lang

  let langName = lang && typeof lang === 'string' ? lang : defaultLocale
  const router = useRouter()
  const pathname = usePathname()

  const reg = /^(?:\/ar|\/en|\/es|\/ja\/ru\/zh)\/[^\/]+$/

  const handleSwitchLanguage = (value: string) => {
    console.log(pathname)

    if (pathname === '/') {
      return router.push(`/${value}`)
    }

    if (/^\/(?:ar|en|es|ja|ru|zh)$/.test(pathname) && value === defaultLocale) {
      return router.push('/')
    }

    let path = pathname.replace(/ar|en|es|ja|ru|zh/, value)
    console.log(path)

    router.push(path)
  }

  return (
    <Select value={langName} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(localeNames).map((key: string) => {
          const name = localeNames[key]
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
