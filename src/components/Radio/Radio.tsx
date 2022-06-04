import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export type RadioValue = { key: string; value: any }

type RadioProps = {
  values: RadioValue[]
  onChange: (value: any) => void
}

export function Radio({ values, onChange }: RadioProps) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    onChange(values[selected].value)
  })

  function tabAction(index: number, item: { key: string; value: any }) {
    return function action(e: KeyboardEvent) {
      if (e.code === 'Space' || e.code === 'Enter') {
        setSelected(index)
        onChange(item.value)
      }

      if (e.code === 'Tab') {
        window.removeEventListener('keydown', action)
      }
    }
  }

  return (
    <div data-testid="radio-group" className="radio-group">
      {values.map((item, index) => {
        return (
          <div
            data-testid="radio"
            tabIndex={0}
            onClick={() => {
              setSelected(index)
              onChange(item.value)
            }}
            onFocus={() => {
              window.addEventListener('keydown', tabAction(index, item))
            }}
            key={item.value.length + index}
            className="radio"
          >
            <div data-testid="radio-check" className="radio__check">
              {index === selected && (
                <motion.div
                  data-testid="radio-circle"
                  layoutId="radio"
                  className="radio__circle"
                />
              )}
            </div>
            <span data-testid="radio-label" className="radio__label">
              {item.key}
            </span>
          </div>
        )
      })}
    </div>
  )
}
