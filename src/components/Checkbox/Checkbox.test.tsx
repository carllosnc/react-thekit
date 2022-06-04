import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { Checkbox } from './Checkbox'
import { useCheckbox } from './Checkbox.hook'

describe('<Expander /> component', () => {
  test('check initial render', () => {
    const { result } = renderHook(() => useCheckbox(false))
    const [checked, toggle] = result.current

    const { getByTestId } = render(
      <Checkbox isChecked={checked} label="checkbox" toggle={toggle} />
    )

    expect(getByTestId('checkbox')).toBeInTheDocument()
    expect(getByTestId('checkbox-square')).toBeInTheDocument()
    expect(getByTestId('checkbox-checked')).toBeInTheDocument()
    expect(getByTestId('checkbox-checked')).not.toBeVisible()
    expect(getByTestId('checkbox-label')).toBeInTheDocument()
  })

  test('check if checkbox is checked', () => {
    const { result } = renderHook(() => useCheckbox(true))
    const [checked, toggle] = result.current

    const { getByTestId } = render(
      <Checkbox isChecked={checked} label="checkbox" toggle={toggle} />
    )

    waitFor(() => {
      expect(getByTestId('checkbox-checked')).toBeVisible()
    })
  })

  test('check useCheckbox states', () => {
    const { result } = renderHook(() => useCheckbox(false))

    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(false)
  })
})
