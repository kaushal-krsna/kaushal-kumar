import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Shared tactile button treatment for internal links and regular button actions.
const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 bg-[linear-gradient(145deg,#fafaf9,#a8a29e)] font-semibold text-stone-950 shadow-[0_14px_34px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-6px_10px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-6px_10px_rgba(0,0,0,0.18)] focus:outline-none focus:ring-2 focus:ring-stone-300/60 focus:ring-offset-2 focus:ring-offset-black'

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
}

const SkeomorphicButton = ({
  children,
  className = '',
  icon: Icon = ArrowUpRight,
  size = 'md',
  to,
  type = 'button',
  ...props
}) => {
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <span>{children}</span>
        {Icon ? <Icon size={17} strokeWidth={2.5} /> : null}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      <span>{children}</span>
      {Icon ? <Icon size={17} strokeWidth={2.5} /> : null}
    </button>
  )
}

export default SkeomorphicButton
