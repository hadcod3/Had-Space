"use client"
import { animatePageIn } from "@/lib/utils";
import { useEffect } from "react";

export default function Template({children}: {children: React.ReactNode}) {
    const banners = Array.from({ length: 10 }, (_, index) => ({
      id: `banner-${index + 1}`,
      left: `${(index * 100) / 10}%`,
    }));
    useEffect(() => {
        animatePageIn() 
    })
    return (
        <div>
            {banners.map((banner) => (
                <div
                key={banner.id}
                id={banner.id}
                className="banner min-h-screen z-50 bg-neutral-200 dark:bg-black fixed top-0"
                style={{ left: banner.left, width: `${100 / 10}%` }}
                />
            ))}
            {children}
        </div>
    )
}