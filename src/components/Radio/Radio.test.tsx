import { render, renderHook, fireEvent, screen } from '@testing-library/react'
import { Radio, RadioValue } from './Radio'
import { useRadio } from './Radio.hook'

describe('<Radio /> component', () => {
  const values: RadioValue[] = [
    {
      key: 'first item',
      value: 'value 1',
    },
    {
      key: 'second item',
      value: 'value 2',
    },
    {
      key: 'third item',
      value: 'value 3',
    },
  ]

  test('check initial render', () => {
    const { result } = renderHook(() => useRadio())

    render(<Radio values={values} onChange={result.current[1]} />)

    expect(screen.getByTestId('radio-group')).toBeInTheDocument()

    expect(screen.queryAllByTestId('radio').length).toBe(values.length)
    screen.queryAllByTestId('radio').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(screen.queryAllByTestId('radio-check').length).toBe(values.length)
    screen.queryAllByTestId('radio-check').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(screen.queryAllByTestId('radio-circle').length).toBe(1)
    screen.queryAllByTestId('radio-circle').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(screen.queryAllByTestId('radio-label').length).toBe(values.length)
    screen.queryAllByTestId('radio-label').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })
  })

  test('check useRadio default state', () => {
    const { result } = renderHook(() => useRadio())

    render(<Radio values={values} onChange={result.current[1]} />)

    expect(result.current[0]).toBe(values[0].value)
  })

  test('check useRadio state', () => {
    const { result } = renderHook(() => useRadio())

    render(<Radio values={values} onChange={result.current[1]} />)

    screen.queryAllByTestId('radio').forEach((item, index) => {
      if (index === 1) {
        fireEvent.click(item)
        expect(result.current[0]).toBe(values[1].value)
      }
    })

    screen.queryAllByTestId('radio').forEach((item, index) => {
      if (index === 2) {
        fireEvent.click(item)
        expect(result.current[0]).toBe(values[2].value)
      }
    })

    screen.queryAllByTestId('radio').forEach((item, index) => {
      if (index === 0) {
        fireEvent.click(item)
        expect(result.current[0]).toBe(values[0].value)
      }
    })
  })
})
