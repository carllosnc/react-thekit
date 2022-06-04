import { motion } from 'framer-motion'
import { useEffect } from 'react'

type CheckboxProps = {
  label: string
  isChecked: boolean
  toggle: () => void
}

export function Checkbox({ label, isChecked, toggle }: CheckboxProps) {
  const checked = {
    normal: {
      opacity: 0,
      scale: 0,
    },

    checked: {
      opacity: 1,
      scale: 1,
    },
  }

  const tabAction = function (e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      toggle()
    }

    if (e.code === 'Tab') {
      window.removeEventListener('keydown', tabAction)
    }
  }

  return (
    <motion.article
      data-testid="checkbox"
      onClick={toggle}
      className="checkbox"
      onFocus={() => {
        window.addEventListener('keydown', tabAction)
      }}
      onBlur={() => {
        window.removeEventListener('keydown', tabAction)
      }}
      tabIndex={0}
    >
      <div data-testid="checkbox-square" className="checkbox__square">
        <motion.div
          data-testid="checkbox-checked"
          variants={checked}
          initial="normal"
          className="checkbox__checked"
          animate={isChecked ? 'checked' : 'normal'}
        />
      </div>
      <div data-testid="checkbox-label" className="checkbox__label">
        {label}
      </div>
    </motion.article>
  )
}
