"use client"

import Collection from "@/components/reusable/Collection"
import { IUiTemplate } from "@/lib/database/models/uitemplate.model"
import { useEffect, useState } from "react"

interface UiTemplateCollectionProps {
    isSample: boolean
    category: string
    headTitle: string
    ctaLink?: string
}

const uiTemplateCache: Record<string, IUiTemplate[]> = {}

const UiTemplateCollection = ({ isSample, category, headTitle, ctaLink } : UiTemplateCollectionProps) => {
  const [data, setData] = useState<IUiTemplate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (uiTemplateCache[category]) {
        setData(uiTemplateCache[category])
        setLoading(false)
        return
      }

      try {
        const res = await fetch(`/api/uitemplate?cat=${category}`)
        const result = await res.json()

        uiTemplateCache[category] = result || []
        setData(result || [])
      } catch (error) {
        console.error("Failed to fetch uitemplates:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category])

  return (
    <section className="py-5">
      <Collection 
        data={data}
        isSample={isSample}
        dataType="uiDesignData"
        collectionType="smallCard"
        headTitle={headTitle}
        loading={loading}
        ctaLink={ctaLink}
      />
    </section>
  )
}

export default UiTemplateCollection
