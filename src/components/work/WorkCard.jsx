import React from 'react'
import { motion } from 'framer-motion'
import SkeomorphicButton from '../ui/SkeomorphicButton'
import ChipList from '../ui/ChipList'

const MotionArticle = motion.article

const WorkCard = ({ work }) => {
  // Some systems are intentionally teaser-only until a case study is ready.
  const shouldShowRedirect = work.showRedirectButton !== false

  return (
    <MotionArticle
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className='group rounded-[1.35rem] border border-stone-700/70 bg-[linear-gradient(145deg,rgba(68,64,60,0.95),rgba(12,10,9,0.95)_45%,rgba(28,25,23,0.98))] p-2.5 shadow-[0_20px_56px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-16px_34px_rgba(0,0,0,0.25)]'
    >
      <div className='flex h-full flex-col rounded-[1rem] border border-stone-800 bg-stone-950 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'>
        <div className='mb-4 flex items-start justify-between gap-3'>
          <div>
            <p className='text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-stone-500'>{work.type}</p>
            <h3 className='mt-2 text-xl font-semibold tracking-tight text-stone-100'>{work.title}</h3>
          </div>
          <span className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-300 shadow-[0_0_18px_rgba(214,211,209,0.55)]' />
        </div>

        <div className='rounded-[0.9rem] border border-stone-800 bg-[linear-gradient(145deg,rgba(41,37,36,0.76),rgba(0,0,0,0.22))] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_18px_rgba(0,0,0,0.22)]'>
          <p className='text-sm font-medium text-stone-300'>{work.feature}</p>
          <p className='mt-2 text-sm leading-6 text-stone-400'>{work.description}</p>
        </div>

        <ChipList items={work.highlights} className='mt-4' variant='compact' />

        {shouldShowRedirect ? (
          <div className='mt-auto pt-5'>
            <SkeomorphicButton to={`/work/${work.slug}`} size='sm'>Open details</SkeomorphicButton>
          </div>
        ) : null}
      </div>
    </MotionArticle>
  )
}

export default WorkCard
