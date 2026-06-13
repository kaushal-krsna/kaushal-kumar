import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'
import WorkExperienceBlock from './work/WorkExperienceBlock'

const MotionHeading = motion.h2

const Experience = () => {
    return (
        <section className='pb-24'>
            <MotionHeading
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Work Experience</MotionHeading>

            <div className='space-y-12'>
                {EXPERIENCES.map((experience) => (
                    <WorkExperienceBlock
                        key={`${experience.company}-${experience.role}-${experience.year}`}
                        experience={experience}
                        // Experience data decides whether this block has system cards.
                        systems={experience.workSystems ?? []}
                    />
                ))}
            </div>
        </section>
    )
}

export default Experience
