import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import SkeomorphicButton from '../components/ui/SkeomorphicButton'
import { ALL_WORK_SYSTEMS } from '../constants/work'

const WorkDetail = () => {
  const { slug } = useParams()
  // Use the flattened registry so detail pages keep working as more work groups are added.
  const work = ALL_WORK_SYSTEMS.find((item) => item.slug === slug)

  if (!work) {
    return (
      <main className='container mx-auto min-h-screen px-8 py-12'>
        <BackButton />
        <section className='mx-auto mt-16 max-w-3xl rounded-[1.75rem] border border-stone-700/70 bg-[linear-gradient(145deg,rgba(41,37,36,0.9),rgba(12,10,9,0.92))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]'>
          <p className='text-sm uppercase tracking-[0.28em] text-stone-500'>Missing route</p>
          <h1 className='mt-4 text-4xl font-semibold text-stone-100'>Work not found</h1>
          <p className='mt-4 leading-7 text-stone-400'>This system detail page does not exist yet.</p>
        </section>
      </main>
    )
  }

  return (
    <main className='container mx-auto min-h-screen px-8 py-12'>
      <BackButton />

      <section className='mx-auto mt-12 max-w-5xl rounded-[2rem] border border-stone-700/70 bg-[linear-gradient(145deg,rgba(68,64,60,0.92),rgba(12,10,9,0.96)_42%,rgba(28,25,23,0.98))] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-22px_42px_rgba(0,0,0,0.28)]'>
        <div className='overflow-hidden rounded-[1.5rem] border border-stone-800 bg-stone-950'>
          <div className='p-6 md:p-10'>
            <p className='text-sm uppercase tracking-[0.3em] text-stone-500'>{work.type}</p>
            <h1 className='mt-4 text-4xl font-semibold tracking-tight text-stone-100 md:text-5xl'>{work.title}</h1>
            <p className='mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500'>{work.feature}</p>
            <p className='mt-4 max-w-3xl text-lg leading-8 text-stone-400'>{work.description}</p>

            <div className='mt-8 grid gap-3 md:grid-cols-3'>
              {work.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className='rounded-[1rem] border border-stone-800 bg-stone-900/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                >
                  <p className='text-sm font-medium text-stone-200'>{highlight}</p>
                </div>
              ))}
            </div>

            <div className='mt-10 rounded-[1.35rem] border border-stone-800 bg-[linear-gradient(145deg,rgba(41,37,36,0.72),rgba(0,0,0,0.34))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-12px_22px_rgba(0,0,0,0.22)]'>
              <h2 className='text-xl font-semibold text-stone-100'>Coming next</h2>
              <p className='mt-3 leading-7 text-stone-400'>
                This page will later include the why, how, what, tradeoffs, screenshots, and implementation story behind this system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const BackButton = () => {
  return (
    <SkeomorphicButton
      to='/'
      icon={ArrowLeft}
    >
      Back to home
    </SkeomorphicButton>
  )
}

export default WorkDetail
