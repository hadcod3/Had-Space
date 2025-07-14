import React from 'react'
import NavItems from './NavItems';
import Image from 'next/image';
import TransitionLink from './TransitionLink';

const Header = () => {
  return (
    <header className={`hidden md:block fixed py-5 w-screen z-30 transition-colors duration-300 `}>
        <div className='absolute top-0 w-full h-full backdrop-blur-sm bg-gradient-to-b from-zinc-50/40 to-transparent dark:from-zinc-900/40 dark:to-transparent -z-10'/>
        <nav className='flex-center'>
            <NavItems/>
            <TransitionLink href='/' className='absolute flex-center z-40'>
              <Image alt='logo' src={"/assets/icons/main_icon_dark.png"} height={500} width={500} className='w-12 dark:invert'/>
              <Image alt='logo' src={"/assets/icons/main_icon_light.png"} height={500} width={500} className='hidden dark:block absolute w-12 dark:hover:blur-sm transition-all'/>
            </TransitionLink>
        </nav>
    </header>
  )
}

export default Header