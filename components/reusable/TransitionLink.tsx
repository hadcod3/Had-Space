'use client'
import { animatePageOut } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Props {
    href: string;
    children?: ReactNode;
    className?: string;
}

const TransitionLink = ({href, children, className} : Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        // Extract base paths for comparison
        const currentBase = pathname.split('/').slice(0, 2).join('/');
        const targetBase = href.split('/').slice(0, 2).join('/');
      
        if (href === "back") {
            router.back()
        } else if (pathname !== href && currentBase !== targetBase) {
            animatePageOut(href, router);
        } else if (pathname !== href) {
            router.push(href);
        }
      };
    return (
        <div onClick={handleClick} className={`${className} cursor-pointer`}>
            {children}
        </div>
    )
}

export default TransitionLink