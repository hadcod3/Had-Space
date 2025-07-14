import UiTemplateCollection from "@/components/reusable/UiTemplateCollection"

const Page = () => {

  return (
    <div>
      <UiTemplateCollection
        isSample={true}
        category="hero"
        headTitle="Hero Gradient"
        ctaLink="/uispace/gradient/hero"
      />
      <UiTemplateCollection
        isSample={true}
        category="tubelight"
        headTitle="Tubelight"
        ctaLink="/uispace/gradient/tubelight"
      />
    </div>
  )
}

export default Page
