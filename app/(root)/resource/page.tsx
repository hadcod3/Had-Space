import Footer from '@/components/reusable/Footer'
import ProjectList from '@/components/reusable/ProjectList'

const ResourcePage = () => {
  return (
    <>
      <div className='relative min-h-screen flex-center flex-col pt-16 lg:pt-24'>
        <div className='wrapper'>
          <ProjectList />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ResourcePage