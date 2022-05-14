import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'
import { MdStar } from 'react-icons/md'

describe('<Button /> component ', () => {
  test('check initial render', () => {
    const { getByTestId } = render(<Button> Button </Button>)

    expect(getByTestId('button')).toBeInTheDocument()
    expect(getByTestId('button')).toBeVisible()
  })

  test('check left icon', () => {
    const { getByTestId } = render(
      <Button leftIcon={<MdStar />}> Button </Button>
    )

    expect(getByTestId('button-icon-left')).toBeInTheDocument()
    expect(getByTestId('button-icon-left')).toBeVisible()
  })

  test('check right icon', () => {
    const { getByTestId } = render(
      <Button rightIcon={<MdStar />}> Button </Button>
    )

    expect(getByTestId('button-icon-right')).toBeInTheDocument()
    expect(getByTestId('button-icon-right')).toBeVisible()
  })

  test('check button loading', () => {
    const { getByTestId } = render(
      <Button isLoading="Loading..."> Button </Button>
    )

    expect(getByTestId('button-loading')).toBeInTheDocument()
    expect(getByTestId('button-loading')).toBeVisible()
    expect(getByTestId('button-loading')).toHaveTextContent('Loading...')
  })

  test('check button loading with default text', () => {
    const { getByTestId } = render(<Button isLoading> Button </Button>)

    expect(getByTestId('button-loading')).toHaveTextContent('Button')
  })
})
