import React from 'react'
import { FaNodeJs, FaAws, FaPython } from 'react-icons/fa6'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb, SiNextdotjs, SiTypescript, SiPostgresql, SiTerraform, SiFastapi, SiAuth0 } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { motion } from 'framer-motion'

const MotionDiv = motion.div
const MotionHeading = motion.h2

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='pb-24'>
            <MotionHeading
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies
            </MotionHeading>

            <MotionDiv
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>

                {/* Languages */}
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className='p-4'>
                    <FaPython className='text-7xl text-[#3776AB]' />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiTypescript className='text-7xl text-[#3178C6]' />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className='p-4'>
                    <TbBrandJavascript className='text-7xl text-[#E8D44E]' />
                </MotionDiv>

                {/* Frontend */}
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className='p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    className='p-4'>
                    <SiNextdotjs className='text-7xl text-white' />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <RiTailwindCssFill className='text-7xl text-[#36BCF8]' />
                </MotionDiv>

                {/* Backend */}
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiFastapi className='text-7xl text-[#009688]' />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className='p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </MotionDiv>

                {/* Authentication */}
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    className='p-4'>
                    <SiAuth0 className='text-7xl text-[#EB5424]' />
                </MotionDiv>

                {/* Infrastructure */}
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4.5)}
                    className='p-4'>
                    <FaAws className='text-7xl text-[#FF9900]' />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className='p-4'>
                    <SiTerraform className='text-7xl text-[#7B42BC]' />
                </MotionDiv>

                {/* Databases */}
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiMongodb className="text-7xl text-green-600" />
                </MotionDiv>
                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <SiPostgresql className='text-7xl text-[#336791]' />
                </MotionDiv>

            </MotionDiv>
        </div>
    )
}

export default Technologies
