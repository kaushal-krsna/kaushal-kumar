import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const MotionHeading = motion.h2
const MotionParagraph = motion.p

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <MotionHeading
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className='my-10 text-center text-4xl'>Get in Touch</MotionHeading>
        <div className='text-center tracking-tighter'>
            <MotionParagraph
                whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0, x: -100 }}
                transition={{duration: 1}}
                className='my-4'>{CONTACT.address}</MotionParagraph>
            <MotionParagraph
                whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0, x: 100 }}
                transition={{duration: 1}}
                className='my-4'>{CONTACT.phoneNo}</MotionParagraph>
            <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
