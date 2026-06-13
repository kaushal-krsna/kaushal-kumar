import React from 'react'
import { motion } from 'framer-motion'
import WorkCard from './WorkCard'
import WorkExperienceSummary from './WorkExperienceSummary'

const MotionPanel = motion.div

const WorkExperienceBlock = ({ experience, systems = [] }) => {
  const hasSystems = systems.length > 0

  return (
    <div className='mx-auto max-w-6xl'>
      <MotionPanel
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className='rounded-[1.75rem] border border-stone-700/70 bg-[linear-gradient(145deg,rgba(68,64,60,0.9),rgba(12,10,9,0.94)_44%,rgba(28,25,23,0.96))] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-22px_40px_rgba(0,0,0,0.28)] md:p-4'
      >
        <WorkExperienceSummary experience={experience} />
      </MotionPanel>

      {/* System cards are optional so non-product roles can share the same layout. */}
      {hasSystems ? (
        <div className='mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {systems.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default WorkExperienceBlock
