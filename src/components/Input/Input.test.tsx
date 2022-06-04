import React from 'react'
import { render } from '@testing-library/react'
import { Input } from './Input'

describe('<Input /> component ', () => {
  test('check basic render', () => {
    const { getByTestId } = render(<Input />)

    expect(getByTestId('input')).toBeInTheDocument()
    expect(getByTestId('input')).toBeVisible()

    expect(getByTestId('input-info')).toBeInTheDocument()
    expect(getByTestId('input-info')).toBeVisible()

    expect(getByTestId('input-content')).toBeInTheDocument()
    expect(getByTestId('input-content')).toBeVisible()

    expect(getByTestId('input-field')).toBeInTheDocument()
    expect(getByTestId('input-field')).toBeVisible()
  })

  test('check input label', () => {
    const { getByTestId } = render(<Input label="input label" />)

    expect(getByTestId('input-label')).toBeInTheDocument()
    expect(getByTestId('input-label')).toBeVisible()
    expect(getByTestId('input-label')).toHaveTextContent('input label')
  })

  test('check input error', () => {
    const { getByTestId } = render(<Input error label="input label" />)
    expect(getByTestId('input-content')).toHaveClass('input__content--error')
  })

  test('check input error message', () => {
    const { getByTestId } = render(
      <Input error errorMessage="input error message" label="input label" />
    )

    expect(getByTestId('input-error-message')).toBeInTheDocument()
    expect(getByTestId('input-error-message')).toBeVisible()
    expect(getByTestId('input-error-message')).toHaveTextContent(
      'input error message'
    )
  })

  test('check input description', () => {
    const { getByTestId } = render(<Input description="input description" />)

    expect(getByTestId('input-description')).toBeInTheDocument()
    expect(getByTestId('input-description')).toBeVisible()
  })

  test('check input success', () => {
    const { getByTestId } = render(<Input success />)

    expect(getByTestId('input-success')).toBeInTheDocument()
    expect(getByTestId('input-success')).toBeVisible()
  })
})
