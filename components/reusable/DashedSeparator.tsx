import React from 'react'


interface DashedSeparatorProps {
    className?: string
    position: "horizontal" | "vertical" | "left" | "top" | "right" | "bottom";
    height: string
    width: string
}

const DashedSeparator = ({className, position, height, width} : DashedSeparatorProps) => {
    
  return (
    position === "horizontal" ? (
        <svg width={width} height={height} className={`${className} absolute inset-0 -z-50`}>
            <line x1="0" y1="0" x2="0" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
            <line x1="100%" y1="0" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />   
        </svg>
    ) : position === "vertical" ? (
        <svg width={width} height={height} className={`${className} absolute inset-0 -z-50`}>
            <line x1="0" y1="0" x2="100%" y2="0" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
            <line x1="0" y1="100%" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
        </svg>
    ) : position === "left" ? (
        <svg width={width} height={height} className={`${className} absolute inset-0 -z-50`}>
            <line x1="0" y1="0" x2="0" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />  
        </svg>
    ) : position === "top" ? (
        <svg width={width} height={height} className={`${className} absolute inset-0 -z-50`}>
            <line x1="0" y1="0" x2="100%" y2="0" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
        </svg>
    ) : position === "right" ? (
        <svg width={width} height={height} className={`${className} absolute inset-0 -z-50`}>
            <line x1="100%" y1="0" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />  
        </svg>
    ) : (
        <svg width={width} height={height} className={`${className} absolute inset-0 -z-50`}>
            <line x1="0" y1="100%" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
        </svg>
    )
  )
}

export default DashedSeparator