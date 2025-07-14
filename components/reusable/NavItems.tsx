"use client";
import { menuLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ThemeToggle } from '../ui/mode-toggle';
import TransitionLink from './TransitionLink';

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className='md:flex-evenly w-full flex-col md:flex-row z-20'>
            {menuLinks.map((link) => {
                const isActive = pathname === link.route
                return (
                    <li 
                        key={link.route}
                        className={`${
                            isActive ? 'text-black dark:text-zinc-50' : "text-gray-700 dark:text-zinc-200"
                        } overflow-y-hidden overflow-x-visible h-7 w-fit `}>
                        <div className='cursor-pointer h-7 flex-col text-subtitle transition-all duration-200 ease-in-out hover:-translate-y-7'>
                            {/* <p className='h-7'>{link.label}</p> */}
                            <TransitionLink href={link.route}>
                                <p className={`hover:text-black hover:dark:text-zinc-50 ${isActive ? 'text-black dark:text-zinc-50' : "text-gray-700 dark:text-zinc-200"}`}>
                                    {link.label}
                                </p>
                            </TransitionLink>
                            <TransitionLink href={link.route}>
                                <p className={`h-7 hover:text-black hover:dark:text-zinc-50 ${isActive ? 'text-black dark:text-zinc-50' : "text-gray-700 dark:text-zinc-200"}`}>
                                    {link.label}
                                </p>
                            </TransitionLink>
                        </div>
                    </li>
                )
            })}
            <li className='flex-center gap-x-3'>
                <ThemeToggle/>
            </li>
        </ul>
    )
}

export default NavItems
