import { Fragment, ReactElement, ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

type TabProps = {
  children: ReactNode
}

export function Tab({ children }: TabProps) {
  return <Fragment>{children}</Fragment>
}

type TabsProps = {
  children: ReactElement[]
  labels: string[]
}

export function Tabs({ labels, children }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<number>(0)

  return (
    <section data-testid="tabs" className="tabs">
      <header data-testid="tabs-header" className="tabs__header">
        {labels.map((item, index) => {
          return (
            <div
              data-testid="tabs-button"
              className="tabs__button"
              key={item + index}
            >
              <button
                data-testid="tabs-item"
                onClick={() => setCurrentTab(index)}
                className="tabs__button__item"
              >
                {item}
              </button>

              {index === currentTab && (
                <motion.div
                  data-testid="tabs-line"
                  layoutId="tab"
                  className="tabs__button__line"
                />
              )}
            </div>
          )
        })}
      </header>

      {children.map((tab, index) => {
        if (index === currentTab) {
          return <div> {tab} </div>
        }
      })}
    </section>
  )
}
