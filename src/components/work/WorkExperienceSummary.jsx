import React from 'react'
import ChipList from '../ui/ChipList'

// Prefer a written summary for product roles; fall back to bullets for resume-style roles.
const ExperienceDescription = ({ experience }) => {
  if (experience.summary) {
    return <p className='mt-4 max-w-4xl leading-7 text-stone-400'>{experience.summary}</p>
  }

  if (experience.description?.length) {
    return (
      <ul className='mt-4 max-w-4xl list-disc list-inside space-y-1 leading-7 text-stone-400'>
        {experience.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    )
  }

  return null
}

const WorkExperienceSummary = ({ experience }) => {
  return (
    <div className='rounded-[1.25rem] border border-stone-800 bg-stone-950/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-7'>
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <h3 className='text-2xl font-semibold text-stone-100'>
          {experience.role} <span className='text-stone-500'>at</span> {experience.company}
        </h3>
        <p className='rounded-full border border-stone-800 bg-stone-900/80 px-3 py-1 text-sm font-medium text-stone-500'>
          {experience.year}
        </p>
      </div>
      <ExperienceDescription experience={experience} />
      <ChipList items={experience.technologies} className='mt-6' />
    </div>
  )
}

export default WorkExperienceSummary
