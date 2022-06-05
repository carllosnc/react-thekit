import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('<Input /> component ', () => {
  test('check basic render', () => {
    render(<Input />)

    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeVisible()

    expect(screen.getByTestId('input-info')).toBeInTheDocument()
    expect(screen.getByTestId('input-info')).toBeVisible()

    expect(screen.getByTestId('input-content')).toBeInTheDocument()
    expect(screen.getByTestId('input-content')).toBeVisible()

    expect(screen.getByTestId('input-field')).toBeInTheDocument()
    expect(screen.getByTestId('input-field')).toBeVisible()
  })

  test('check input label', () => {
    render(<Input label="input label" />)

    expect(screen.getByTestId('input-label')).toBeInTheDocument()
    expect(screen.getByTestId('input-label')).toBeVisible()
    expect(screen.getByTestId('input-label')).toHaveTextContent('input label')
  })

  test('check input error', () => {
    render(<Input error label="input label" />)
    expect(screen.getByTestId('input-content')).toHaveClass(
      'input__content--error'
    )
  })

  test('check input error message', () => {
    render(
      <Input error errorMessage="input error message" label="input label" />
    )

    expect(screen.getByTestId('input-error-message')).toBeInTheDocument()
    expect(screen.getByTestId('input-error-message')).toBeVisible()
    expect(screen.getByTestId('input-error-message')).toHaveTextContent(
      'input error message'
    )
  })

  test('check input description', () => {
    render(<Input description="input description" />)

    expect(screen.getByTestId('input-description')).toBeInTheDocument()
    expect(screen.getByTestId('input-description')).toBeVisible()
  })

  test('check input success', () => {
    render(<Input success />)

    expect(screen.getByTestId('input-success')).toBeInTheDocument()
    expect(screen.getByTestId('input-success')).toBeVisible()
  })
})
