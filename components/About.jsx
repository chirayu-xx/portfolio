import React, { useEffect } from 'react'
import {motion} from 'framer-motion'

import { urlFor } from '../lib/client';


export default function About({pageInfo}) {
  
  
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.4}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img 
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96'
      initial={{
        x:-200,
        opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1.4
      }}
      viewport={{once:true}}
      src={urlFor(pageInfo.profilePic).url()}
      />
      <div className='space-y-10 mx-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='text-[#F7AB0A]/50'>Something</span> About Me</h4>
        <p className='text-base'>
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}