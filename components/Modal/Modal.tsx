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
      zIndex: '-1',
    },
    expanded: {
      opacity: 1,
      zIndex: '99999',
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
        animate={isOpen ? 'expanded' : 'normal'}
        variants={modal}
        onClick={onClose}
        initial="normal"
        className="modal"
      >
        <motion.div
          animate={isOpen ? 'expanded' : 'normal'}
          variants={content}
          initial="normal"
          onClick={stopPropagation}
          className="modal__container"
        >
          <div className="modal__content">{children}</div>
        </motion.div>

        <FiX onClick={onClose} className="modal__close" />
      </motion.section>
    </>
  )
}
