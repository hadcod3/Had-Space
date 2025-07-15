'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { PiArrowUpRight } from 'react-icons/pi'
import InfiniteCarousel from '@/components/reusable/InfiniteCarousel';
import TransitionLink from '@/components/reusable/TransitionLink';
import { IProject } from '@/types';
import CardTemplate from '@/components/reusable/Card';
import Contact from '@/components/reusable/Contact';
import BlurText from '@/components/reusable/BlurText';
import Footer from '@/components/reusable/Footer';

const AboutPage = () => {
    const [projects, setProjects] = useState<IProject[] | null>(null)
  
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
    
  const gsap1Ref = useRef<HTMLDivElement>(null);
  const gsap2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Select the text lines using their ref
    if (gsap1Ref.current) {
      const fullOpacity = gsap1Ref.current.querySelectorAll('h4');
      const halfOpacity = gsap1Ref.current.querySelectorAll('p');
      gsap.fromTo(
        fullOpacity,
        { 
            y: '100%', 
            opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          delay: 0.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        halfOpacity,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 0.6,
          duration: 1,
          delay: 0.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }

    if (gsap2Ref.current){
        const components = gsap2Ref.current.querySelectorAll('div');
        gsap.fromTo(
          components,
          { y: '100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1,
            delay: 0.5,
            stagger: 0.2,
            ease: 'power2.out',
          }
        );
    }
  }, []);

  return (
    <>
        <div className="relative flex-center pt-16 lg:pt-24 overflow-x-hidden">
            <Image alt="" src={"https://72415j1pxr.ufs.sh/f/PWAJ4Vne3fXctdMkkxWIh4V9G0SizUgyORcBk5EoYMs3Fxrl"} width={2000} height={2000} className="absolute w-screen top-0 -z-50 rotate-180" />
            <section className='flex flex-col items-center'>
                <div className="max-w-[600px] p-5">
                    <div className='w-fit h-fit p-2 bg-gray-500/20 rounded-full border-0.05 border-gray-200/20' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <Image alt="ava_profile" src="https://72415j1pxr.ufs.sh/f/PWAJ4Vne3fXcQgxHkxt3kbi6LRCxEeaH5OPFmDSWd2hlBsnw" width={500} height={500} className='w-28 h-28 rounded-full object-cover'/>
                    </div>
                    <div className='w-full py-4 flex flex-col gap-y-2'>
                        <BlurText
                        text={`Hey, I’m Hadi.`}
                        animateBy="words"
                        direction="bottom"
                        className="text-h4-bold"
                        />
                        <BlurText
                        text={`Web Developer & Designer`}
                        animateBy="words"
                        direction="bottom"
                        className="text-h4-bold"
                        />
                        <p data-aos="fade-up" data-aos-delay="500" className='opacity-70'>
                        Creating seamless web experiences and captivating designs that blend functionality with creativity. As a web programmer and designer, I transform ideas into user-friendly solutions while staying inspired by evolving trends and innovative techniques.
                        </p>
                        <div className='bg-gray-300/40 dark:bg-gray-300/10 py-2 px-5 w-fit rounded-lg flex-center gap-x-3' data-aos="fade-up" data-aos-delay="700">
                            <div className='relative flex-center'>
                                <div className='absolute w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400'></div>
                                <div className='absolute w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-ping'></div>
                            </div>
                            <span className='font-medium text-teal-600 dark:text-teal-400'>Available for new project</span>
                        </div>
                    </div>
                </div>
                <div className='w-screen'>
                    <div className='relative flex justify-center w-full h-fit py-10 sm:py-20'>
                        <Image alt="" src={"/assets/images/inside_box_illu.png"} width={5000} height={5000} className="absolute h-full min-w-[900px] sm:min-w-[1800px] top-0 dark:invert rotate-180 dark:opacity-60" />
                        <Image alt="" src={"/assets/images/inside_box_illu.png"} width={5000} height={5000} className="absolute h-full min-w-[900px] sm:min-w-[1800px] top-0 dark:invert rotate-180 blur-sm opacity-40 hidden dark:block" />
                        <div ref={gsap2Ref}><div className='opacity-0'><InfiniteCarousel/></div></div>
                        <div className='absolute flex flex-col -z-20 top-0 w-screen h-full'>
                            <div className='w-full h-10 sm:h-20 bg-gradient-to-b from-transparent to-gray-300 dark:to-black'/>
                            <div className='w-full bg-gray-300 dark:bg-black flex-grow'/>
                            <div className='w-full h-10 sm:h-20 bg-gradient-to-t from-transparent to-gray-300 dark:to-black'/>
                        </div>
                    </div>
                </div>
                <div className="max-w-[600px] p-5">
                    <div className='py-5'>
                        <h4 className='text-h6-bold pb-3'>About</h4>
                        <p className='opacity-70'>
                        I&lsquo;m Hadi—a designer and web developer with an insatiable curiosity. Currently studying at the Yogyakarta University of Technology, I&lsquo;m always exploring the intersection of creativity and technology. I love bringing ideas to life—whether through sleek digital interfaces, immersive visuals, or seamless web experiences. For me, design isn&lsquo;t just about aesthetics—it&lsquo;s about crafting interactions that feel effortless, engaging, and meaningful. 🚀
                        </p>
                    </div>
                    <Separator/>
                    <div className='py-5'>
                        <h6 className='text-h6-bold pb-3'>Work Experience</h6>
                        <div className='flex sm:items-center flex-col sm:flex-row'>
                            <p className='text-shadow w-44'>2021 - Present</p>
                            <p >Students enrolled in the Informatics study program</p>
                        </div>
                    </div>
                    <Separator/>
                    <div className='py-10 flex flex-col gap-y-5'>
                        <h6 className='text-h6-bold text-center' >Transforming Ideas Into Web Reality</h6>
                        {Array.isArray(projects) &&
                        projects
                            .filter((project): project is IProject => project !== null && project !== undefined && '_id' in project)
                            .slice(-2)
                            .map((project) => (
                            <CardTemplate
                                type="mediumSize"
                                data={project}
                                key={project._id}
                                dataType="project"
                            />
                        ))}
                        <div className='w-full flex-center' >
                            <TransitionLink href='/resource' >
                                <Button className='w-fit px-10'>More Portfolio<PiArrowUpRight /></Button>
                            </TransitionLink>
                        </div>
                    </div>
                    <div className='relative py-5'>
                        <Image alt='' src={"https://72415j1pxr.ufs.sh/f/PWAJ4Vne3fXcd7kcXesqpxkJDFbUrOudtHZ2039YMKEzhoW6"} width={2000} height={2000} className='absolute hidden sm:block top-32 w-full dark:invert dark:opacity-50 -z-30'/>
                        <div className='flex flex-col items-center gap-y-3 pb-5'>
                            <h6 className='text-h6-bold text-center' >How Can I Help?</h6>
                            <p className='text-center max-w-64 opacity-70'>Let&lsquo;s transform your imagination into something delightful.</p>
                        </div>
                        <div className='sm:p-5 flex-center flex-wrap gap-2'>
                            <Card className='w-full sm:w-[49%]'>
                                <CardContent className='flex flex-col gap-y-2 p-4'>
                                    <div className='flex items-center gap-x-2'>
                                        <div className='w-1 h-5 rounded-md bg-teal-600 dark:bg-teal-400'></div>
                                        <h6 className='text-h6-bold'>Web Design</h6>
                                    </div>
                                    <p className='opacity-70'>Designing visually stunning, user-friendly layouts and interfaces to enhance the digital experience.</p>
                                </CardContent>
                            </Card>
                            <Card className='w-full sm:w-[49%]'>
                                <CardContent className='flex flex-col gap-y-2 p-4'>
                                    <div className='flex items-center gap-x-2'>
                                        <div className='w-1 h-5 rounded-md bg-teal-600 dark:bg-teal-400'></div>
                                        <h6 className='text-h6-bold'>Fullstack Web</h6>
                                    </div>
                                    <p className='opacity-70'>Developing complete web solutions, from backend services to polished frontend experiences.</p>
                                </CardContent>
                            </Card>
                            <Card className='w-full sm:w-[49%]'>
                                <CardContent className='flex flex-col gap-y-2 p-4'>
                                    <div className='flex items-center gap-x-2'>
                                        <div className='w-1 h-5 rounded-md bg-teal-600 dark:bg-teal-400'></div>
                                        <h6 className='text-h6-bold'>Frontend Web</h6>
                                    </div>
                                    <p className='opacity-70'>Creating dynamic and responsive web interfaces that prioritize user interaction and experience.</p>
                                </CardContent>
                            </Card>
                            <Card className='w-full sm:w-[49%]'>
                                <CardContent className='flex flex-col gap-y-2 p-4'>
                                    <div className='flex items-center gap-x-2'>
                                        <div className='w-1 h-5 rounded-md bg-teal-600 dark:bg-teal-400'></div>
                                        <h6 className='text-h6-bold'>Backend Web</h6>
                                    </div>
                                    <p className='opacity-70'>Building robust and efficient server-side logic, APIs, and database management systems.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <Contact 
                    title='Get in touch' 
                    subtitle='I’m always eager to explore new opportunities, collaborate, or exchange ideas with like-minded individuals. Don’t hesitate to send me an email if you’d like to view my portfolio deck or discuss a potential project.'/>
                </div>  
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default AboutPage