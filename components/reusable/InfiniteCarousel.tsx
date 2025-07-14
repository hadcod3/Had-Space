import React, { useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'motion/react'
import CardTemplate from './Card'
import { IProject } from '@/types'

const InfiniteCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [projects, setProjects] = useState<IProject[] | null>(null)
  const didFetch = useRef(false) // prevent refetching
  const abortController = useRef<AbortController | null>(null) // cancel fetch on unmount

  useEffect(() => {
    if (didFetch.current) return

    const fetchProjects = async () => {
      try {
        abortController.current = new AbortController()
        const res = await fetch('/api/projects', {
          signal: abortController.current.signal,
        })

        const data = await res.json()
        const filtered = Array.isArray(data)
          ? data.filter((item) => item && item._id)
          : []

        setProjects(filtered)
        didFetch.current = true
      } catch (error) {
          console.error('Failed to load projects:', error)
      }
    }

    fetchProjects()

    return () => {
      abortController.current?.abort()
    }
  }, [])

  const xTranslation = useMotionValue(0)

  const TOP_SPEED = 300
  const LOW_SPEED = 900
  const [duration, setDuration] = useState(TOP_SPEED)

  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    const finalPosition = -width / 2 - 20

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender((prev) => !prev)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }

    return () => {
      controls.stop()
    }
  }, [xTranslation, width, duration, rerender, mustFinish])

  if (!projects) return <div>Loading carousel...</div>

  return (
    <div className='w-screen overflow-hidden'>
      <motion.div
        className='flex gap-5 w-fit'
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(LOW_SPEED)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(TOP_SPEED)
        }}
      >
        {Array(5).fill(projects).flat().map((item, index) => (
          item && '_id' in item ? (
            <CardTemplate
              data={item}
              key={`${item._id}-${index}`}
              type='carousel'
            />
          ) : null
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteCarousel
