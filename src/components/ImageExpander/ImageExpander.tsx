import { motion } from 'framer-motion'
import React, { ReactElement, useEffect, useState } from 'react'
import { FiMaximize2 } from 'react-icons/fi'

type ImageExpanderProps = {
  thumb: ReactElement
  full: ReactElement
}

export function ImageExpander({ thumb, full }: ImageExpanderProps) {
  const [open, setOpen] = useState<boolean>(false)

  function toggleExpander() {
    setOpen(c => !c)
  }

  function closeExpander() {
    setOpen(false)
  }

  function closeExpanderByKey(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Enter') {
      closeExpander()
    }
  }

  const expander = {
    normal: {
      opacity: 0,
      display: 'none',
      transition: {
        delay: 0.2,
      },
    },
    expanded: {
      opacity: 1,
      display: 'block',
    },
  }

  const figure = {
    normal: {
      opacity: 0,
      scale: 0.8,
    },
    expanded: {
      opacity: 1,
      scale: 1,
    },
  }

  useEffect(() => {
    window.addEventListener('keydown', closeExpanderByKey)

    return () => {
      window.removeEventListener('keydown', closeExpanderByKey)
    }
  })

  return (
    <div
      data-testid="image-expander"
      className="image-expander"
      onClick={toggleExpander}
    >
      <figure className="image-expander__thumb">{thumb}</figure>

      <div
        data-testid="image-expander-reference"
        className="image-expander__reference"
      >
        <FiMaximize2 className="image-expander__reference__icon" />
      </div>

      <motion.div
        data-testid="image-expander-overlay"
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation()
          closeExpander()
        }}
        variants={expander}
        transition={{ duration: 0.5 }}
        initial="normal"
        animate={open ? 'expanded' : 'normal'}
        className="image-expander__overlay"
      >
        <motion.div
          data-testid="image-expander-content"
          variants={figure}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
          initial="normal"
          animate={open ? 'expanded' : 'normal'}
          className="image-expander__content"
        >
          <figure
            data-testid="image-expander-figure"
            className="image-expander__figure"
          >
            {full}
          </figure>
        </motion.div>
      </motion.div>
    </div>
  )
}
