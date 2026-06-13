import React from 'react'
import TechChip from './TechChip'

// Centralized chip rendering keeps technology and highlight styling consistent.
const ChipList = ({ items, className = '', variant = 'default' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {items.map((item) => (
        <TechChip key={item} variant={variant}>
          {item}
        </TechChip>
      ))}
    </div>
  )
}

export default ChipList
