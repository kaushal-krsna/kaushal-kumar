import React from 'react'

const variantClasses = {
  default: 'bg-[linear-gradient(145deg,rgba(68,64,60,0.92),rgba(12,10,9,0.92))] px-3 py-1 text-sm',
  compact: 'bg-stone-900/80 px-2.5 py-1 text-[0.7rem]',
}

const TechChip = ({ children, variant = 'default' }) => {
  return (
    <span
      className={`rounded-full border border-stone-700 font-medium text-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-5px_10px_rgba(0,0,0,0.24)] ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}

export default TechChip
