'use client'
import { siteConfig } from '@/config/site'
import { faq } from '@/types/shop'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { PlusIcon } from 'lucide-react'
import { RoughNotation } from 'react-rough-notation'

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event('resize')
  window.dispatchEvent(event)
}

const FAQ = ({ id, locale, faqs }: { id: string; locale: any; faqs: faq[] }) => {
  return (
    <section id={id} className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color={siteConfig.mainColor}>
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3"
        itemClasses={{
          base: 'px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50',
          title: 'font-medium',
          trigger: 'py-6',
          content: 'pt-0 pb-6 text-base text-default-500'
        }}
        items={faqs}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {faqs?.map(item => (
          <AccordionItem key={item.title} indicator={<PlusIcon />} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQ
