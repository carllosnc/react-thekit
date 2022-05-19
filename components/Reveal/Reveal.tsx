import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type RevealProps = {
  className?: string
  children: ReactNode
  delay?: number
  duration?: number
  type?: 'DOWN' | 'UP' | 'LEFT' | 'RIGHT' | 'SCALE' | 'ROTATE'
}

const DOWN = {
  start: {
    opacity: 0,
    y: '-100px',
  },
  end: {
    opacity: 1,
    y: '0px',
  },
}

const UP = {
  start: {
    opacity: 0,
    y: '100px',
  },
  end: {
    opacity: 1,
    y: '0px',
  },
}

const LEFT = {
  start: {
    opacity: 0,
    x: '-100px',
  },
  end: {
    opacity: 1,
    x: '0px',
  },
}

const RIGHT = {
  start: {
    opacity: 0,
    x: '100px',
  },
  end: {
    opacity: 1,
    x: '0px',
  },
}

const SCALE = {
  start: {
    scale: 0.5,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
  },
}

const ROTATE = {
  start: {
    rotate: 45,
    opacity: 0,
  },
  end: {
    rotate: 0,
    opacity: 1,
  },
}

export function Reveal({
  children,
  delay = 0,
  type,
  duration = 0.9,
  className = '',
}: RevealProps) {
  let ANIMATE: any = DOWN

  if (type === 'DOWN') ANIMATE = DOWN
  if (type === 'UP') ANIMATE = UP
  if (type === 'LEFT') ANIMATE = LEFT
  if (type === 'RIGHT') ANIMATE = RIGHT
  if (type === 'SCALE') ANIMATE = SCALE
  if (type === 'ROTATE') ANIMATE = ROTATE

  return (
    <motion.div
      className={className}
      data-testid="reveal"
      transition={{
        delay: delay,
        duration: duration,
        type: 'spring',
        bounce: 0.4,
      }}
      initial={ANIMATE.start}
      whileInView={ANIMATE.end}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
