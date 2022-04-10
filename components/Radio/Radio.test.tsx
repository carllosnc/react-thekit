import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Radio, RadioValue } from './Radio'
import { useRadio } from './Radio.hook'
import { renderHook } from '@testing-library/react-hooks'

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

    const { getByTestId, queryAllByTestId } = render(
      <Radio values={values} onChange={result.current[1]} />
    )

    expect(getByTestId('radio-group')).toBeInTheDocument()

    expect(queryAllByTestId('radio').length).toBe(values.length)
    queryAllByTestId('radio').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(queryAllByTestId('radio-check').length).toBe(values.length)
    queryAllByTestId('radio-check').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(queryAllByTestId('radio-circle').length).toBe(1)
    queryAllByTestId('radio-circle').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })

    expect(queryAllByTestId('radio-label').length).toBe(values.length)
    queryAllByTestId('radio-label').forEach(item => {
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

    const { queryAllByTestId } = render(
      <Radio values={values} onChange={result.current[1]} />
    )

    queryAllByTestId('radio').forEach((item, index) => {
      if (index === 1) {
        fireEvent.click(item)
        expect(result.current[0]).toBe(values[1].value)
      }
    })

    queryAllByTestId('radio').forEach((item, index) => {
      if (index === 2) {
        fireEvent.click(item)
        expect(result.current[0]).toBe(values[2].value)
      }
    })

    queryAllByTestId('radio').forEach((item, index) => {
      if (index === 0) {
        fireEvent.click(item)
        expect(result.current[0]).toBe(values[0].value)
      }
    })
  })
})
