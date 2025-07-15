import Image from 'next/image'
import React from 'react'
import { PiFirstAidLight } from 'react-icons/pi'

const AnimateSeparator = () => {
  return (
    <div className='flex justify-center items-end w-full gap-x-1 py-5'>
        <PiFirstAidLight size={12} className='animate-fadeInOut opacity-50 delay-2000'/>
        <PiFirstAidLight size={16} className='animate-fadeInOut rotate-45 opacity-50 delay-1500'/>
        <PiFirstAidLight size={20} className='animate-fadeInOut opacity-50 delay-1000'/>
        <PiFirstAidLight size={24} className='animate-fadeInOut rotate-45 opacity-50 delay-500'/>
        <Image alt='logo' src={"/assets/icons/main_icon_dark.png"} height={500} width={500} className='w-7 dark:invert animate-fadeInOut opacity-50'/>
        <PiFirstAidLight size={24} className='animate-fadeInOut rotate-45 opacity-50 delay-500'/>
        <PiFirstAidLight size={20} className='animate-fadeInOut opacity-50 delay-1000'/>
        <PiFirstAidLight size={16} className='animate-fadeInOut rotate-45 opacity-50 delay-1500' />
        <PiFirstAidLight size={12} className='animate-fadeInOut opacity-50 delay-2000'/>
    </div> 
  )
}

export default AnimateSeparator