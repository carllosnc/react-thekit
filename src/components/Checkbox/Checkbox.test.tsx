import {
  render,
  waitFor,
  renderHook,
  act,
  screen,
} from '@testing-library/react'
import { Checkbox } from './Checkbox'
import { useCheckbox } from './Checkbox.hook'

describe('<Expander /> component', () => {
  test('check initial render', () => {
    const { result } = renderHook(() => useCheckbox(false))
    const [checked, toggle] = result.current

    render(<Checkbox isChecked={checked} label="checkbox" toggle={toggle} />)

    expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    expect(screen.getByTestId('checkbox-square')).toBeInTheDocument()
    expect(screen.getByTestId('checkbox-checked')).toBeInTheDocument()
    expect(screen.getByTestId('checkbox-checked')).not.toBeVisible()
    expect(screen.getByTestId('checkbox-label')).toBeInTheDocument()
  })

  test('check if checkbox is checked', async () => {
    const { result } = renderHook(() => useCheckbox(true))
    const [checked, toggle] = result.current

    render(<Checkbox isChecked={checked} label="checkbox" toggle={toggle} />)

    await waitFor(() => {
      expect(screen.getByTestId('checkbox-checked')).toBeVisible()
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
