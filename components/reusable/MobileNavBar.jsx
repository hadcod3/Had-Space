'use client'
import { mobileMenuLinks } from '@/constants';
import React, { useEffect, useRef, useState } from 'react';
import TransitionLink from './TransitionLink';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const MobileNavBar = () => {
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef(null);

    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);};

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 });
        tl.current = gsap
        .timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut"
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container });

    useEffect(() => {
        if (tl.current) {
            isMenuOpen ? tl.current.play() : tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div ref={container} className='block md:hidden z-50'>
            <div className='fixed top-0 w-screen p-4 px-6 flex items-center justify-between backdrop-blur-sm bg-gradient-to-b from-zinc-50/40 to-transparent dark:from-zinc-900/40 dark:to-transparent -z-10'>
                <TransitionLink href='/' className='text-h6-bold'>Had Space</TransitionLink>
                <div className='text-h6 cursor-pointer' onClick={toggleMenu}>Menu</div>
            </div>
            <div className='menu-overlay fixed flex flex-col w-screen h-screen bg-neutral-200 dark:bg-black clipGsapOverlay'>
                <div className='w-screen p-4 px-6 flex items-center justify-end'>
                    <div className='text-h6 cursor-pointer' onClick={toggleMenu}>Close</div>
                </div>
                <div className='h-screen flex items-center sm:items-start'>
                    <div className='p-5 sm:p-20'>
                        {mobileMenuLinks.map((link, index) => (
                            <div key={index}>
                                <div className='clipGsap'> 
                                    <TransitionLink href={link.route} className='menu-link-item-holder relative'>
                                        <div onClick={toggleMenu} className='text-h1 '>{link.label}</div>
                                    </TransitionLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavBar;
