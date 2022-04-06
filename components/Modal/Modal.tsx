import { motion } from 'framer-motion'
import { MouseEvent, ReactNode, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const modal = {
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
      y: '-50px',
    },
    expanded: {
      opacity: 1,
      y: '0px',
      transition: {
        delay: 0.08,
      },
    },
  }

  function stopPropagation(e: MouseEvent) {
    e.stopPropagation()
  }

  function closeModal(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModal)

    return () => {
      window.removeEventListener('keydown', closeModal)
    }
  })

  return (
    <>
      <motion.section
        data-testid="modal"
        animate={isOpen ? 'expanded' : 'normal'}
        variants={modal}
        onClick={onClose}
        initial="normal"
        className="modal"
      >
        <motion.div
          data-testid="modal-container"
          animate={isOpen ? 'expanded' : 'normal'}
          variants={content}
          initial="normal"
          onClick={stopPropagation}
          className="modal__container"
        >
          <div data-testid="modal-content" className="modal__content">
            {children}
          </div>
        </motion.div>

        <FiX
          data-testid="modal-close"
          onClick={onClose}
          className="modal__close"
        />
      </motion.section>
    </>
  )
}
