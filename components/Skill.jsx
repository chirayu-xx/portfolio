import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../lib/client'



export default function Skill({skill, directionLeft}) {
  return (
    <motion.div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            y:-200,
            opacity:0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        src={urlFor(skill?.image).url()}
        alt=''
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out md:w-28 md:h-28'
        />
        <motion.div 
        
        className='absolute opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </motion.div>
    </motion.div>
  )
}