import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export function key() {
  return (Math.random() + 1).toString(36).substring(7)
}

// carousel item

type CarouselItemProps = {
  children: ReactNode
  position: number
}

function CarouselItem({ children, position = 0 }: CarouselItemProps) {
  return (
    <motion.div
      transition={{ duration: 0.6 }}
      animate={{ x: position }}
      className="carousel-item"
      data-testid="carousel-item"
    >
      {children}
    </motion.div>
  )
}

// carousel

type CarouselProps = {
  items: any[]
  dots?: boolean
}

export function Carousel({ items, dots = false }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  function prev() {
    setCurrent(s => {
      if (s > 0) {
        return s - 1
      }

      return s
    })
  }

  function next() {
    setCurrent(s => {
      if (s < items.length - 1) {
        return s + 1
      }

      return s
    })
  }

  function getContainerWidth() {
    setContainerWidth(s => containerRef.current.getBoundingClientRect().width)

    window.addEventListener('resize', () => {
      setContainerWidth(s => containerRef.current.getBoundingClientRect().width)
    })
  }

  function Dots() {
    return (
      <div data-testid="carousel-dots" className="carousel-dots">
        {items.map((dot, index) => {
          return (
            <motion.div
              data-testid="carousel-dots-item"
              onClick={() => setCurrent(s => index)}
              animate={{
                scale: current === index ? 1.6 : 1,
                opacity: current === index ? 1 : 0.6,
              }}
              className="carousel-dots__item"
              key={key()}
            />
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    getContainerWidth()
  }, [containerWidth, current])

  return (
    <div className="carousel" data-testid="carousel">
      {dots && <Dots />}

      <div
        ref={containerRef}
        className="carousel__container"
        data-testid="carousel-content"
      >
        {items.map((item, index) => {
          return (
            <CarouselItem key={index} position={-containerWidth * current}>
              {item}
            </CarouselItem>
          )
        })}
      </div>

      <AnimatePresence>
        {current > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={prev}
            data-testid="carousel-button-left"
            className="carousel__button carousel__button--prev"
          >
            <FiChevronLeft className="carousel__button__icon" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {current < items.length - 1 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={next}
            data-testid="carousel-button-right"
            className="carousel__button carousel__button--next"
          >
            <FiChevronRight className="carousel__button__icon" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
