'use client'

import { Button } from '@/components/ui/button'
import { IUiTemplate } from '@/lib/database/models/uitemplate.model'
import { Card } from '../ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { Download } from "lucide-react"
import { useState } from 'react'

interface UiTemplateDetailProps {
  data: IUiTemplate
}


const UiTemplateDetail = ({ data }: UiTemplateDetailProps) => {
  
  const [open, setOpen] = useState(false)
  const handleDownload = async (url: string, resolution: 'low' | 'high') => {
    try {
      const res = await fetch(url)
      const blob = await res.blob()
      const objectUrl = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = objectUrl
      link.download = `hadspace-${data.cat}-${data.idx}-${resolution}.png`
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(objectUrl)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <div className='flex space-x-4'>
      <Card className='w-[50%] aspect-video rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden'>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={data.thumbImgUrl}
          alt="thumb"
          width={200}
          height={100}
          loading="lazy"
          className="w-full h-full object-cover object-center "
        />
        {/* eslint-enable @next/next/no-img-element */}
      </Card>
      <div className='space-y-2'>
        <h1 className='text-bold font-bold text-5xl capitalize'>{data.cat}/{data.idx}</h1>
        <p className='capitalize'>Category : {data.cat}</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[220px] justify-between"
            >
              Download
              <Download className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px] p-0">
            <Command>
              <CommandList>
                <CommandEmpty>No Option</CommandEmpty>
                <CommandGroup>
                  <CommandItem className='py-0'>
                    <Button 
                      variant={'ghost'} 
                      size={'default'} 
                      className='p-0' 
                      onClick={() => handleDownload(data.thumbImgUrl, 'low')}>
                      Low Resolution <span className='text-muted-foreground'>(1440 x 1024)</span>
                    </Button>
                  </CommandItem>
                  <CommandItem className='py-0'>
                    <Button 
                      variant={'ghost'} 
                      size={'default'} 
                      className='p-0' 
                      onClick={() => handleDownload(data.hdImgUrl, 'high')}>
                      High Resolution <span className='text-muted-foreground'>(5760 x 4096)</span>
                    </Button>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default UiTemplateDetail
