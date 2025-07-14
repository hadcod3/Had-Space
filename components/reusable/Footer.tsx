import Link from 'next/link'
import React from 'react'
import TransitionLink from './TransitionLink'
import DashedSeparator from './DashedSeparator'

const Footer = () => {
  return (
    <div className="relative mt-10 md:mt-20">
        <div className='absolute top-0 w-full h-10'>
            <div className='relative py-5 px-10 sm:px-24 flex items-center justify-between lg:justify-center'>
                <DashedSeparator position="vertical" width="100%" height="100%"/>
                <TransitionLink href={"/"} className='hidden lg:absolute xs:flex-center text-h6-bold dark:text-teal-300'>
                    <p className=''>Had Space</p>
                    <p className='absolute dark:hover:blur-sm transition-all'>Had Space</p>
                </TransitionLink>
                <div className='gap-10 flex-between w-fit lg:w-full '>
                    <div className='flex flex-col lg:flex-row lg:flex-center gap-3 text-subtitle'>
                        <TransitionLink href={"/about"}>About</TransitionLink>
                        <TransitionLink href={"/uispace"}>UI Space</TransitionLink>
                        <TransitionLink href={"/reference"}>References</TransitionLink>
                        <TransitionLink href={"/resource"}>Resources</TransitionLink>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:flex-center gap-3 text-subtitle'>
                        <Link href={"/"}>Youtube</Link>
                        <Link href={"/"}>Instagram</Link>
                        <Link href={"/"}>Github</Link>
                        <Link href={"/"}>Buymeacoffe</Link>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-3'>
                <div className='w-full flex-center py-3'>
                    <p className='text-shadow lg:text-subtitle'>© 2025 HAD CODE. All rights reserved</p>
                </div>
            </div>
        </div>
        <div className='relative mx-5 sm:mx-20 h-52 lg:h-full'>
            <DashedSeparator position="horizontal" width="100%" height="100%"/>
        </div>
    </div>
  )
}

export default Footer