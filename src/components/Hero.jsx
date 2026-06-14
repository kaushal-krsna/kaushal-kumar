import React from 'react'
import profilePic from "../assets/kpp2.png"
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"
import SkeomorphicButton from './ui/SkeomorphicButton'

const MotionDiv = motion.div
const MotionHeading = motion.h2
const MotionImage = motion.img
const MotionParagraph = motion.p
const MotionSpan = motion.span

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <MotionImage
                            src={profilePic}
                            alt='Kaushal Kumar'
                            className='border border-stone-900 rounded-3xl'
                            height={650}
                            width={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }} />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <MotionDiv
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex flex-col items-center lg:items-start mt-10'>
                        <MotionHeading
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Kaushal Kumar
                        </MotionHeading>
                        <MotionSpan variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Founding Software Engineer</MotionSpan>
                        <MotionParagraph variants={childVariants}
                            className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                            {HERO_CONTENT}
                        </MotionParagraph>
                        <MotionDiv variants={childVariants} className='mb-10'>
                            <SkeomorphicButton
                                href='https://storage.googleapis.com/acciojob-user-content/resumes/f7e8a5c9-7c1b-48d8-b185-10b278c18668-Kaushal_Kumar_Resume.pdf'
                                target='_blank'
                                rel='noopener noreferrer'
                                download
                            >
                                Download Resume
                            </SkeomorphicButton>
                        </MotionDiv>

                    </MotionDiv>

                </div>

            </div>

        </div>
    )
}

export default Hero
