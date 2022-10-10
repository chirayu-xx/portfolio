import React from 'react'
import {motion} from 'framer-motion'

import { urlFor } from '../lib/client'


export default function ExperienceCard({experience}) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[500px] xl:mt-40 mt-28 snap-center bg-[#292929]  p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
          y:-100,
          opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-top' 
        src={urlFor(experience?.companyImage).url()}
        />  
        <div className='px-0 md:px-10'>
          <h4 className='text-3xl font-light'>{experience.jobTitle}</h4>
          <p className='font-bold text-xl mt-1'>{experience.company}</p>
          <div className='flex space-x-2 my-2'>
            {/* Tech Used  */}
            {experience.technologies.map((technology) => (
              <img key={technology._id} className='h-10 w-10 rounded-full' src={urlFor(technology.image).url()} alt=''/>
            ))
            }
            
          </div>
          <p className='uppercase py-2 text-gray-300'>
            {new Date(experience.dateStarted).toDateString()} - {" "}
            {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString() }
          </p>
          <ul className='list-disc space-y-4 ml-5 text-lg h-75 scrollbar-none w-4/5 pr-8 overflow-y-scroll'>
            {experience.points.map((point,i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}