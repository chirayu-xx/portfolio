import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'




export default function WorkExperience({experiences}) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.4}}
    className='h-screen flex relative flex-col text-left md:flex-col max-w-full px-10 justify-evenly mx-auto items-center  '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-center snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80'>
          {experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience  = {experience}/>
          ))}

        </div>
    </motion.div>
  )
}