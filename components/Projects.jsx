import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../lib/client';
import Image from 'next/image'

export default function Projects({projects}) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='overflow-x-hidden h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-32 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]'>
            
            {/* projects  */}
            {projects.map((project,i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                    <h5 className='uppercase text-center tracking-[20px] text-gray-500 hidden md:inline'>Click to view the Project</h5>
                    <a href={project.linkToBuild} target="_blank" rel="noreferrer">
                    <motion.img
                    initial={{
                        opacity:0,
                        y:-300
                    }}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1}}
                    viewport={{once:true}}
                    className='md:h-48 md:w-96'
                    src={urlFor(project.image).url()}
                    alt=''
                    />
                    </a>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-xl md:text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>{i+1} </span> {project.title}
                            </h4>
                            <div className='flex items-center gap-10 space-x-2 justify-evenly'>
                            {project.technologies.map((technology) => (
                                <Image
                                key={technology._id}
                                className='h-11 w-12 p-2'
                                src={urlFor(technology.image).url()}
                                alt=''
                                width={50}
                                height={50}
                                />
                            ))}
                            </div>
                            <p className='text-lg text-center md:text-left max-w-xl items-center justify-center hidden md:inline '>{project.summary}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}