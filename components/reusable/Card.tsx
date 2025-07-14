"use client"
import React, { useState } from 'react'
import TransitionLink from './TransitionLink'
import Image from 'next/image'
import Link from 'next/link'
import { FaCss3Alt, FaHtml5, FaSass, FaSquareJs } from "react-icons/fa6";
import { IBlog, ICarousel, IProject } from '@/types';
import { 
    PiBookmarkSimpleLight, 
    PiCaretRight, 
    PiChatTextLight, 
    PiCirclesThreePlus, 
    PiShareNetworkLight, 
    PiThumbsDownLight, 
    PiThumbsUpLight 
} from 'react-icons/pi';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip"
import { motion } from "motion/react"
import { Button } from '../ui/button';
import { IUiTemplate } from '@/lib/database/models/uitemplate.model';
import { Skeleton } from '../ui/skeleton';

interface CardProps {
    type: "blog" | "carousel" | "smallSize" | "mediumSize" | "bigSize";
    data: IBlog | ICarousel | IProject | IUiTemplate;
    dataType?: string;
}

const LazyImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />}
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1200}
        height={675}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover object-center transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  )
}

const CardTemplate = ({type, data, dataType} : CardProps) => {
  return (
    <>
        {type === "blog" ? (
            <div key={(data as IBlog)._id} className='w-[350px] min-h-[370px] h-fit p-3 flex-between flex-col bg-gray-400/10 border-t-0.1 border-l-0.1 border-r-0.05 border-b-0.05 border-gray-400/20 dark:border-white/30 rounded-2xl overflow-hidden shadow-md'>
                <div className='w-full p-1'>
                    <h6 className='text-h6-bold line-clamp-3'>{(data as IBlog).title}</h6>
                </div>
                <div>
                    <p className='text-shadow px-1'>Jun 12, 2025</p>
                    <Link href={`/blog/${(data as IBlog)._id}`} className="w-full max-h-40 h-40">
                        <Image alt=""src="/images/hero_gradient.png" width={2000} height={1000} className="w-full h-full my-2 bg-gray-50/10 object-cover object-center rounded-lg border-t-0.1 border-l-0.1 border-r-0.05 border-b-0.05 border-gray-400/20 dark:border-white/30"/>
                    </Link>
                    <div className='flex-between'>
                        <div className='w-fit flex-center bg-gray-300/40 dark:bg-gray-300/10 rounded-lg overflow-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='hover:bg-teal-400/20 group p-2 rounded-md cursor-pointer transition-colors'>
                                            <PiThumbsUpLight size={20} className='group-hover:fill-teal-500'/>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Like</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div className='w-[1px] h-5 border-r-0.1 border-gray-400 dark:border-gray-600'></div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='hover:bg-red-400/20 group p-2 rounded-md cursor-pointer transition-colors'>
                                            <PiThumbsDownLight size={20} className='group-hover:fill-red-500'/>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Dislike</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className='flex-center gap-1'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='hover:bg-yellow-400/20 group p-2 rounded-md cursor-pointer transition-colors'>
                                            <PiChatTextLight size={20} className='group-hover:fill-yellow-500'/>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Comments</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <p className='text-subtitle'>1.1k</p>
                        </div>

                        <div className='flex-center gap-1'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='hover:bg-purple-400/20 group p-2 rounded-md cursor-pointer transition-colors'>
                                            <PiBookmarkSimpleLight size={20} className='group-hover:fill-purple-500'/>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Bookmark</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <p className='text-subtitle'>1.1k</p>
                        </div>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className='hover:bg-blue-400/20 group p-2 rounded-md cursor-pointer transition-colors'>
                                        <PiShareNetworkLight size={20} className='group-hover:fill-blue-500'/>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>Share</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        ) : type === "carousel" ? (
            <motion.div key={(data as ICarousel)._id} className='relative flex-center min-w-60 sm:min-w-96 w-6min-w-60 sm:w-96 rounded-lg bg-gray-100/30 dark:bg-gray-500/30 p-3 sm:p-5 border-t-0.1 border-l-0.1 border-b-0.05 border-r-0.05 border-white/30 overflow-hidden shadow-lg backdrop-blur-sm hover:cursor-pointer'>
                <div className='relative p-2 sm:p-3 hover:p-0 bg-gray-50/30 rounded-md border-t-0.1 border-l-0.1 border-b-0.05 border-r-0.05 border-white/30 shadow-md transition-all ease-in'>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img alt='' src={(data as ICarousel)?.thumbImgUrl} width={500} height={500} className='absolute top-0 left-0 w-full h-full -z-10 blur-md opacity-70'/>
                    <img alt='' src={(data as ICarousel)?.thumbImgUrl} width={500} height={500} className='aspect-video rounded-sm'/>
                    {/* eslint-enable @next/next/no-img-element */}
                </div>
            </motion.div>
        ) : type === "smallSize" ?(
            <div key={data._id} className='aspect-video rounded-xl overflow-hidden bg-muted/50 border-0.05 border-zinc-200 dark:border-zinc-800'>
                {
                    (dataType === "project" ? (
                        <TransitionLink key={(data as IProject)._id} href={`/resource/${(data as IProject)._id}`} className="w-full object-cover object-center">
                            {/* <img alt=""src={(data as IProject).thumbImgUrl} width={200} height={100} className="w-full h-full object-cover object-center"/> */}
                            <LazyImage src={(data as IProject).thumbImgUrl} alt="Project thumbnail" />
                        </TransitionLink>
                    ) : dataType === "uiTemplate" ? (
                        <TransitionLink key={(data as IUiTemplate)._id} href={`/uispace/${(data as IUiTemplate)._id}`} className="w-full object-cover object-center">
                            <LazyImage src={(data as IUiTemplate).thumbImgUrl} alt="UI Template thumbnail" />
                            {/* {(data as IUiTemplate).thumbImgUrl ? (
                            <img
                                alt=""
                                src={(data as IUiTemplate).thumbImgUrl}
                                width={200}
                                height={100}
                                className="w-full h-full object-cover object-center"
                            />
                            ) : null} */}
                        </TransitionLink>
                    ) :(
                        <TransitionLink key={(data as IProject)._id} href={`/${(data as IProject)._id}`} className="w-full object-cover object-center">
                            <LazyImage src={(data as IProject).thumbImgUrl} alt="Default thumbnail" />
                            {/* <img alt=""src={(data as IProject).thumbImgUrl} width={200} height={100} className="w-full h-full object-cover object-center"/> */}
                        </TransitionLink>
                        )
                    )
                }
            </div>
        ) : type === "mediumSize" ? (
            <div key={(data as IProject)._id} className='flex flex-col gap-y-3 p-3 border rounded-xl shadow-md' >
                <div className='p-3 bg-gray-500/10 rounded-lg shadow-inner'>
                    <LazyImage src={(data as IProject).thumbImgUrl} alt="Medium project" className='rounded-md'/>
                    {/* <img alt='project' src={(data as IProject).thumbImgUrl} width={1000} height={1000} className='w-full aspect-video rounded-md shadow-md'/> */}
                </div>
                <div className='flex flex-col gap-y-3 p-2'>
                    <h6 className='text-h6-bold line-clamp-1'>{(data as IProject).title}</h6>
                    <p className='text-shadow line-clamp-3'>{(data as IProject).desc}</p>
                    <TransitionLink href={`/resource/${(data as IProject)._id}`}>
                        <Button variant={"ghost"} className='w-fit border'>View Project<PiCaretRight size={20} /></Button>
                    </TransitionLink>
                </div>
            </div>
        ) : type === "bigSize" ? (
            <TransitionLink href={`/resource/${data._id}`} className='max-w-full xmd:max-w-[47%] lg:max-w-[45%] h-fit' key={(data as IProject)._id}>
                {/* <img alt="resource_thumb" src={(data as IProject).posterImgUrl} width={1000} height={1000} className="w-full rounded-3xl border-0.05"/> */}
                <LazyImage src={(data as IProject).posterImgUrl} alt="Big project" className='rounded-2xl'/>
                <div className='flex-between pt-4'>
                  <div className='flex-center gap-x-3'>
                    <h6 className='text-body-2-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all line-clamp-1'>{(data as IProject).title}</h6>
                    <div className='flex-center gap-x-1'>
                      <TransitionLink href='/' className='p-1 rounded-md border-0.05'><FaHtml5 size={16} color='#ff5733'/></TransitionLink>
                      <div className='p-1 rounded-md border-0.05 block lg:hidden'><PiCirclesThreePlus size={16} color='#0d9488'/></div>
                      <TransitionLink href='/' className='p-1 rounded-md border-0.05 hidden lg:block'><FaCss3Alt size={16} color='#264de4'/></TransitionLink>
                      <TransitionLink href='/' className='p-1 rounded-md border-0.05 hidden lg:block'><FaSquareJs size={16} color='#f7df1e'/></TransitionLink>
                      <TransitionLink href='/' className='p-1 rounded-md border-0.05 hidden lg:block'><FaSass size={16} color='#c69'/></TransitionLink>
                    </div>
                  </div>
                  <h6 className='text-body-1 min-w-20 text-end'>{(data as IProject).price === 0 ? "Free" : `$${(data as IProject).price} USD`}</h6>
                </div>
            </TransitionLink>
        ) : (
            <>
                <p>No Card</p>
            </>
        )}

    </>
  )
}

export default CardTemplate