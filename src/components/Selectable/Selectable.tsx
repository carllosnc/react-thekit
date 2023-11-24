import { ReactNode, useState, Fragment, useEffect, ReactElement } from 'react'
import { motion } from 'framer-motion'

interface SelectableItemProps {
  children: ReactNode
  data: any
}

export function SelectableItem({ children }: SelectableItemProps) {
  return <Fragment>{children}</Fragment>
}

type SelectableProps = {
  children: ReactNode[]
  onSelect: (arg: any) => void
  start?: number
}

export function Selectable({ children, onSelect, start = 0 }: SelectableProps) {
  const [isSelected, setIsSelected] = useState<number>(start)

  function clickHandle(item: ReactElement, index: number) {
    const props = item.props as SelectableItemProps

    setIsSelected(index)
    onSelect(props.data)
  }

  const tabAction = function (item: ReactElement, index: number) {
    return function action(e: KeyboardEvent) {
      if (e.code === 'Space' || e.code === 'Enter') {
        clickHandle(item, index)
      }

      if (e.code === 'Tab') {
        window.removeEventListener('keydown', tabAction(item, index))
      }
    }
  }

  useEffect(() => {
    children.forEach((item: ReactElement, index: number) => {
      const props = item.props as SelectableItemProps

      if (index === isSelected) {
        onSelect(props.data)
      }
    })
  }, [start, children, isSelected, onSelect])

  return (
    <div data-testid="selectable" className="selectable">
      {children.map((item: ReactElement, index: number) => {
        return (
          <div
            data-testid="selectable-item"
            tabIndex={0}
            className={`selectable__item ${
              index === isSelected && 'selectable__item--active'
            }`}
            onClick={() => clickHandle(item as ReactElement, index)}
            key={index}
            onFocus={() => {
              window.addEventListener(
                'keydown',
                tabAction(item as ReactElement, index),
              )
            }}
            onBlur={() => {
              window.removeEventListener(
                'keydown',
                tabAction(item as ReactElement, index),
              )
            }}
          >
            {index === isSelected ? (
              <motion.div
                data-testid="selectable-mark"
                layoutId="selected"
                className="selectable__mark"
              />
            ) : null}

            <div className="selectable__content">{item}</div>
          </div>
        )
      })}
    </div>
  )
}
