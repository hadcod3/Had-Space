'use client'
import AnimateSeparator from "@/components/reusable/AnimateSeparator";
import Collection from "@/components/reusable/Collection";
import DashedSeparator from "@/components/reusable/DashedSeparator";
import Footer from "@/components/reusable/Footer";
import ShinyText from "@/components/reusable/ShinyText";
import TransitionLink from "@/components/reusable/TransitionLink";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [projects, setProjects] = useState<IProject[]>()
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const res = await fetch('/api/projects')
          const data = await res.json()
          setProjects(data)
        } catch (error) {
          console.error('Failed to load projects:', error)
        }
      }
  
      fetchProjects()
    }, [])

  return (
    <>
      <div className="relative">
        <Image alt="" src={"https://72415j1pxr.ufs.sh/f/PWAJ4Vne3fXctdMkkxWIh4V9G0SizUgyORcBk5EoYMs3Fxrl"} width={2000} height={2000} className="absolute w-screen top-0 -z-50 rotate-180" />
        <section className="min-h-screen flex-center flex-col">
          <div className="wrapper mb-10">
            <div className="relative py-16 xs:py-28">
              <div className="relative w-full flex-center h-[60px]">
                <div className="absolute w-full h-full">
                  <DashedSeparator position="vertical" width="100%" height="100%"/>
                </div>
                <div className="absolute flex-center w-fit h-[80px] px-20">
                  <DashedSeparator position="horizontal" width="100%" height="100%"/>
                  <ShinyText text="Javascript Syndrome" disabled={false} speed={3} className='text-body-2-bold' />
                </div>
              </div>
              <div className="relative flex-center w-full py-28 mt-10 mb-5">
                <DashedSeparator position="vertical" width="100%" height="100%"/>
                <div className="absolute -inset-5 px-10 flex xs:hidden">
                  <DashedSeparator position="horizontal" width="calc(100% - 80px)" height="100%" className="inset-auto"/>
                </div>
                <div className="absolute px-5 lg:px-20 w-full h-full flex-center">
                  <div className="relative w-full h-full">
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -top-1 -left-1"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -top-1 -right-1"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -bottom-1 -left-1"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -bottom-1 -right-1"></div>
                  </div>
                </div>
                <h1 className="text-h1" id="head-title">HAD SPACE</h1>
              </div>
              <div className="flex-center w-full">
                <p className="flex flex-wrap gap-1 text-center">Your Ultimate Hub for Web Development Essentials.</p>
              </div>
              <div className="relative w-full h-[80px] mt-5">
                <DashedSeparator position="vertical" width="100%" height="100%"/>
                <div className="absolute top-0 left-0 w-full h-full flex-between xs:flex-center xs:gap-x-5" id="buttons">
                  <Button 
                    onClick={() => {
                        const section = document.getElementById('projects_collection');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }} className="w-[48%] xs:w-fit xs:btn-large" size={"lg"}>Get Started</Button>
                  <TransitionLink href="/resource" className="w-[48%] xs:w-fit">
                    <Button variant="outline" className="w-full xs:btn-large" size={"lg"}>Discover</Button>
                  </TransitionLink>
                </div>
              </div>
              <div className="absolute hidden xs:flex-center top-10 left-0 w-full h-screen -z-40 ">
                <div className="relative flex item-center w-full h-[650px] p-5 lg:px-20">
                  <DashedSeparator position="horizontal" width="100%" height="100%" className="relative"/>
                </div>
              </div>
            </div>
              <AnimateSeparator/>
          </div>
        </section>

        {/* Project Collection */}
        <section className="wrapper">
          <Collection 
            data={projects}
            isSample={true} 
            dataType={'projectData'} 
            collectionType={"smallCard"}
            headTitle={'Stunning web landing page templates'}
            subtitle={'HTML, CSS, JavaScript Projects'}
            ctaLink={'/resource'}
          />
        </section>

        {/* Blog Collection */}
        {/* <section className="wrapper">
          <Collection 
            isSample={true} 
            dataType={'blogData'} 
            collectionType={"smallCard"}
            headTitle={'Design convert into stories from the web'}
            subtitle={'Dive deep into trends that define the modern web'}
            ctaLink={'/blog'}
          />
        </section> */}

      </div>
      <Footer/>
    </>
  );
}