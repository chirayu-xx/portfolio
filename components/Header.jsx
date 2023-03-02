import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from 'framer-motion'
import Link from 'next/link'


export default function Header({socials}) {
  return (
    <header className='sticky top-0 p-5  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            y:-500,
            x:-500,
            opacity:0,
            scale:0.5, 
        }}
        animate={{
            y:0,
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social  */}
            {socials.map((social) => (
                 <SocialIcon
                 key={social._id}
                 url={social.url}
                target='_blank' 
                fgColor='gray'
                 bgColor='transparent'
                 className='hover:scale-105'
                 />
            ))}
        </motion.div>
        
        <Link href='#contact'>
        <motion.div 
        initial={{
            y:-500,
            x:500,
            opacity:0,
            scale:0.5, 
        }}
        animate={{
            y:0,
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer group'>
                <SocialIcon
                className='cursor-pointer group-hover:scale-105'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:scale-105'>Get In Touch</p>
            </motion.div>
        </Link>
    </header>
  )
}