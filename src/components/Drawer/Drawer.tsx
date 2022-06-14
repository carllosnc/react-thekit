import { motion } from 'framer-motion'
import { MouseEvent, ReactNode, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

type DrawerProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export function Drawer({ children, isOpen, onClose }: DrawerProps) {
  const Drawer = {
    normal: {
      opacity: 0,
      display: 'none',
      transition: {
        delay: 0.1,
      },
    },
    expanded: {
      opacity: 1,
      display: 'flex',
    },
  }

  const content = {
    normal: {
      opacity: 0,
      x: '-50px',
    },
    expanded: {
      opacity: 1,
      x: '0px',
      transition: {
        bounce: 0.3,
        duration: 0.3,
        type: 'spring',
        delay: 0.08,
      },
    },
  }

  function stopPropagation(e: MouseEvent) {
    e.stopPropagation()
  }

  function closeDrawer(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeDrawer)

    return () => {
      window.removeEventListener('keydown', closeDrawer)
    }
  })

  return (
    <motion.section
      data-testid="drawer"
      animate={isOpen ? 'expanded' : 'normal'}
      variants={Drawer}
      onClick={onClose}
      initial="normal"
      className="drawer"
    >
      <motion.div
        data-testid="drawer-container"
        animate={isOpen ? 'expanded' : 'normal'}
        variants={content}
        initial="normal"
        onClick={stopPropagation}
        className="drawer__container"
      >
        <div data-testid="drawer-content" className="drawer__content">
          {children}
        </div>
      </motion.div>

      <FiX
        data-testid="drawer-close"
        onClick={onClose}
        className="drawer__close"
      />
    </motion.section>
  )
}
