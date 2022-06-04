import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

type ExpanderProps = {
  title: string
  children: ReactNode
}

export function Expander({ title, children }: ExpanderProps) {
  const [isOpen, setIsOpen] = useState<boolean>()

  const container = {
    normal: {
      opacity: 0,
      height: '0px',
    },
    expanded: {
      opacity: 1,
      height: 'auto',
    },
  }

  const arrow = {
    normal: {
      rotate: 0,
    },
    expanded: {
      rotate: 90,
    },
  }

  function toggle() {
    setIsOpen(s => !s)
  }

  function tabAction(e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      toggle()
    }

    if (e.code === 'Tab') {
      window.removeEventListener('keydown', tabAction)
    }
  }

  return (
    <article
      tabIndex={0}
      onFocus={() => {
        window.addEventListener('keydown', tabAction)
      }}
      onBlur={() => {
        window.removeEventListener('keydown', tabAction)
      }}
      data-testid="expander"
      className="expander"
    >
      <h3
        data-testid="expander-title"
        className="expander__title"
        onClick={toggle}
      >
        <motion.div
          data-testid="expander-arrow"
          variants={arrow}
          initial="normal"
          animate={isOpen ? 'expanded' : 'normal'}
        >
          <FiChevronRight className="expander__arrow" />
        </motion.div>
        <span>{title}</span>
      </h3>

      <motion.div
        data-testid="expander-container"
        className="expander__container"
        variants={container}
        initial="normal"
        animate={isOpen ? 'expanded' : 'normal'}
      >
        <div data-testid="expander-content" className="expander__content">
          {children}
        </div>
      </motion.div>
    </article>
  )
}
