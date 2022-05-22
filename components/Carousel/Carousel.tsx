import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// carousel item

type CarouselItemProps = {
  children: any
  position: number
}

function CarouselItem({ children, position = 0 }: CarouselItemProps) {
  return (
    <motion.div
      transition={{ duration: 0.6 }}
      animate={{ x: position }}
      className="carousel-item"
    >
      {children}
    </motion.div>
  )
}

// carousel

type CarouselProps = {
  items: any[]
}

export function Carousel({ items }: CarouselProps) {
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

  useEffect(() => {
    console.log(current)

    getContainerWidth()
  }, [containerWidth, current])

  return (
    <div className="carousel" data-testid="carousel">
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={prev}
            className="carousel__button carousel__button--prev"
          >
            <FiChevronLeft className="carousel__button__icon" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {current < items.length - 1 && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={next}
            className="carousel__button carousel__button--next"
          >
            <FiChevronRight className="carousel__button__icon" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
