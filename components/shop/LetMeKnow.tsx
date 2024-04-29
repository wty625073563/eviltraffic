'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

import { useState } from 'react'

const LetMeKnowDialog = ({ btn }: { btn: string }) => {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const { toast } = useToast()
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({
        description: 'Please enter a valid email address',
        variant: 'destructive'
      })
      return
    }

    if (!inputValue) {
      toast({
        description: 'Please enter what you need',
        variant: 'destructive'
      })
      return
    }

    fetch('https://www.eviltraffic.com/api/feedback/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: { email, inputValue }, feedType: 0 })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Failed to submit feedback')
        }
      })
      .then(data => {
        toast({
          description: 'Your request has been sent!'
        })
        setOpen(false)
      })
      .catch(error => {
        console.error(error)
        toast({
          description: 'Failed to submit feedback',
          variant: 'destructive'
        })
      })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="text-primary underline cursor-pointer hover:opacity-65">{btn}</span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription>
            Fill in the services you need and I&apos;ll do my best to fulfill your request!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Your Email
            </Label>
            <Input className="col-span-3" onChange={handleEmailChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">You need</Label>
            <Input className="col-span-3" onChange={handleInputChange} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save and Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LetMeKnowDialog
