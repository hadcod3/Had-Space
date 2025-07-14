import { PageProps } from '@/.next/types/app/layout'
import NotFoundPage from '@/components/reusable/NotFoundPage'
import UiTemplateCollection from '@/components/reusable/UiTemplateCollection'
import UiTemplateDetail from '@/components/reusable/UiTemplateDetail'
import { getUiTemplateById } from '@/lib/database/actions/uitemplate.actions'

const Page = async ({ params }: PageProps) => {
  try {
    const { id } = await params
    const data = await getUiTemplateById(id)

    if (!data) {
      return <div className="p-3 text-red-500">Data not found.</div>
    }

    return (
      <div className="p-3 space-y-10">
        <UiTemplateDetail data={data} />
        <UiTemplateCollection
          isSample={false}
          category={data.cat}
          headTitle="More in this style"
        />
      </div>
    )
  } catch (error) {
    console.error('Error loading page:', error)
    return (
      <NotFoundPage/>
    )
  }
}
export default Page
