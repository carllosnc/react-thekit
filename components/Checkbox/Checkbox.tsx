import { motion } from 'framer-motion'

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

  return (
    <motion.article
      data-testid="checkbox"
      onClick={toggle}
      className="checkbox"
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
