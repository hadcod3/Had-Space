'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { IProject } from '@/lib/database/models/project.model'
import TransitionLink from '@/components/reusable/TransitionLink'
import {
  Table, TableBody, TableCell, TableRow
} from "@/components/ui/table"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Contact from '@/components/reusable/Contact'
import { Separator } from '@/components/ui/separator'
import Footer from '@/components/reusable/Footer'
import { PiShareFatLight } from 'react-icons/pi'

interface Props {
  project: IProject | null;
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
        className={`w-full aspect-video rounded-lg ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  )
}

const ProjectDetailPage = ({ project }: Props) => {
  const isLoading = !project;

  return (
    <>
      <div className='relative flex-center pt-16 lg:pt-24'>
        <section className='flex-col flex w-[600px] p-5 gap-y-5'>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink asChild>
                  <TransitionLink href='/'>Home</TransitionLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink asChild>
                  <TransitionLink href='/resource'>Resource</TransitionLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{isLoading ? <Skeleton className='w-10 h-4' /> : project._id.slice(-5)}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h4 className='text-h4-bold'>
            {isLoading ? <Skeleton className='h-6 w-2/3' /> : project.title}
          </h4>

          {isLoading ? (
            <Skeleton className='w-40 h-10 rounded-md' />
          ) : (
            <TransitionLink href={project.liveLink}>
              <Button size="lg" variant={'outline'}>
                Demo Website<PiShareFatLight />
              </Button>
            </TransitionLink>
          )}

          <div className='sm:p-5 sm:bg-zinc-200/50 dark:bg-zinc-800/50 shadow-inner border-0.05 rounded-xl my-5 sm:my-10'>
            {isLoading ? (
              <Skeleton className='w-full aspect-video rounded-lg' />
            ) : (
              <LazyImage src={project.thumbImgUrl} alt="Project thumbnail" />
            )}
          </div>

          <div>
            <h6 className='text-h6-bold mb-3'>Tech Stack</h6>
            <Table>
              <TableBody>
                {[...Array(4)].map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      {isLoading ? <Skeleton className='w-16 h-4' /> : ["HTML", "CSS", "SCSS", "Javascript"][i]}
                    </TableCell>
                    <TableCell>
                      {isLoading
                        ? <Skeleton className='w-full h-4' />
                        : [
                            "Defines the content of the webpage.",
                            "Controls the presentation layer (visual design).",
                            "Simplifies complex styling with variables, nesting, and mixins.",
                            "Manages the logic and functionality of a webpage.",
                          ][i]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <h6 className='text-h6-bold mb-3'>Included in Package</h6>
            <ul className='list-disc pl-4'>
              {isLoading ? (
                [...Array(3)].map((_, i) => <li key={i}><Skeleton className='w-1/2 h-4' /></li>)
              ) : project.included?.length ? (
                project.included.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No included available</li>
              )}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h6 className='text-h6-bold mb-3'>Features</h6>
            <ul className='list-disc pl-4'>
              {isLoading ? (
                [...Array(3)].map((_, i) => <li key={i}><Skeleton className='w-1/2 h-4' /></li>)
              ) : project.features?.length ? (
                project.features.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No features available</li>
              )}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col gap-y-3 pb-4'>
            <h6 className='text-h6-bold'>What&lsquo;s your plan?</h6>
            <p>Short on cash for the template? No stress! Dive into my YouTube video for step-by-step guidance and build it like a pro.</p>

            <div className='w-full flex-between'>
              {isLoading ? (
                <>
                  <Skeleton className='w-[49%] h-10' />
                  <Skeleton className='w-[49%] h-10' />
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    className='w-[49%] min-w-30'
                    onClick={() => window.open(project.purchaseLink)}
                  >
                    Purchase now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className='w-[49%] min-w-30'
                    onClick={() => window.open(project.playlistLink)}
                  >
                    Build it now
                  </Button>
                </>
              )}
            </div>
          </div>
          <Separator />
          <Contact
            title='Let me know'
            subtitle='Got a theme idea for our next project? Shoot us an email and let’s make it happen!'
          />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ProjectDetailPage;
