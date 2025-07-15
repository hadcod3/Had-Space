"use client"

import React from 'react'
import { Button } from '../ui/button'
import { projectData } from '@/constants'
import { PiArrowUpRight } from 'react-icons/pi'
import { IBlog, IProject } from '@/types'
import CardTemplate from './Card'
import TransitionLink from './TransitionLink'
import { Skeleton } from '../ui/skeleton'
import EmptyStateText from './EmptyStateText'
import { IUiTemplate } from '@/lib/database/models/uitemplate.model'

interface CollectionProps {
  data?: IProject[] | IUiTemplate[] | IBlog[]
  isSample: boolean
  dataType: string
  collectionType: string
  headTitle: string
  subtitle?: string
  ctaLink?: string
  loading?: boolean
}

const Collection = ({
  data = [],
  isSample,
  dataType,
  collectionType,
  headTitle,
  subtitle,
  ctaLink,
  loading = false,
}: CollectionProps) => {
  const displayLimit = -6

  const renderSmallCards = () => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="aspect-video rounded-xl bg-muted/30" />
        </div>
      ))
    }

    const source =
      dataType === 'projectData'
        ? (data as IProject[])
        : (data as IUiTemplate[])

    const finalData = isSample ? source.slice(displayLimit) : source

    return finalData.map((item) =>
      item && item._id ? (
        <CardTemplate
          key={item._id}
          type="smallSize"
          data={item}
          dataType={dataType === 'projectData' ? 'project' : 'uiTemplate'}
        />
      ) : null
    )
  }

  const renderBlogCards = () => {
    if (loading) {
      return Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-video w-full rounded-xl" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </div>
      ))
    }

    const source = isSample ? projectData.slice(displayLimit) : projectData
    return source.map((project) => (
      <CardTemplate key={project._id} type="blog" data={project} />
    ))
  }

  const shouldShowEmptyState = !loading && (!data || data.length === 0)

  return (
    <div className="w-full flex-1">
      <div className="relative flex flex-col gap-y-10">
        <div className="flex justify-between items-center">
          <div className="w-[300px] xs:w-[500px]">
            <h4 className="text-h4-bold mb-2">{headTitle}</h4>
            <p className="text-subtitle">{subtitle}</p>
          </div>
          {ctaLink && (
            <TransitionLink href={ctaLink}>
              <Button variant="outline" className="btn-large w-fit">
                View More <PiArrowUpRight />
              </Button>
            </TransitionLink>
          )}
        </div>

        {!shouldShowEmptyState ? (
          <div className="relative w-full grid auto-rows-min gap-4 md:grid-cols-3">
            {collectionType === 'smallCard'
              ? renderSmallCards()
              : renderBlogCards()}
          </div>
        ) : (
          <EmptyStateText />
        )}
      </div>
    </div>
  )
}

export default Collection
