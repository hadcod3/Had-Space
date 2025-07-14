'use client'

import { useEffect, useState } from 'react'
import { IProject } from '@/types'
import CardTemplate from '@/components/reusable/Card'
import { Skeleton } from '@/components/ui/skeleton'
import EmptyStateText from './EmptyStateText'

export default function ProjectList() {
  const [projects, setProjects] = useState<IProject[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects')
        const result = await res.json()
        setProjects(result)
      } catch (error) {
        console.error('Failed to load projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-fit flex-center flex-wrap gap-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full xmd:max-w-[47%] lg:max-w-[45%] space-y-4">
            <Skeleton className="w-full aspect-[6/7] rounded-3xl" />
            <div className="flex justify-between items-start pt-2">
              <div className="flex items-center gap-x-3">
                <Skeleton className="h-5 w-24 rounded-md" />
                <div className="flex items-center gap-x-1">
                  <Skeleton className="h-6 w-6 rounded-md" />
                  <Skeleton className="h-6 w-6 rounded-md" />
                  <Skeleton className="h-6 w-6 rounded-md hidden lg:block" />
                  <Skeleton className="h-6 w-6 rounded-md hidden lg:block" />
                  <Skeleton className="h-6 w-6 rounded-md hidden lg:block" />
                </div>
              </div>
              <Skeleton className="h-5 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <EmptyStateText/>
    ) 
  }

  return (
    <div className="w-full">
      <div className="text-center pb-10">
        <h1 className="text-h4-bold">Where Art Meets Code</h1>
        <p className="text-subtitle opacity-70">
          Transform your ideas into reality with templates that blend beauty and elegance.
        </p>
      </div>

      <div className="w-full h-fit flex-center flex-wrap gap-10">
        {projects.map((project) => (
          <CardTemplate key={project._id} type="bigSize" data={project} />
        ))}
      </div>
    </div>
  )
}
