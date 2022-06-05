import { createContext, useContext, useState, useMemo } from 'react'

const CountContext = createContext(null)

function CountProvider(props: any) {
  const [count, setCount] = useState(0)

  const value = useMemo(() => [count, setCount], [count])

  return <CountContext.Provider value={value} {...props} />
}

function useCount() {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error('useCount must be used with a CountProvider')
  }

  const [count, setCount] = context

  function increment() {
    setCount((count: number) => count + 1)
  }

  return {
    count,
    setCount,
    increment,
  }
}

export { CountProvider, useCount }
