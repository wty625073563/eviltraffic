import { Button } from '@/components/ui/button'
import { PartyPopper } from 'lucide-react'
import Link from 'next/link'

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.eviltraffic"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-[#5e17eb] hover:bg-[#5e17eb]-600 text-white"
        aria-label="Get Boilerplate"
      >
        <PartyPopper />
        {locale.title}
      </Button>
    </Link>
  )
}

export default CTAButton
