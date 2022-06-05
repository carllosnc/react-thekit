import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { MdStar } from 'react-icons/md'

describe('<Button /> component ', () => {
  test('check initial render', () => {
    render(<Button> Button </Button>)

    expect(screen.getByTestId('button')).toBeInTheDocument()
    expect(screen.getByTestId('button')).toBeVisible()
  })

  test('check left icon', () => {
    render(<Button leftIcon={<MdStar />}> Button </Button>)

    expect(screen.getByTestId('button-icon-left')).toBeInTheDocument()
    expect(screen.getByTestId('button-icon-left')).toBeVisible()
  })

  test('check right icon', () => {
    render(<Button rightIcon={<MdStar />}> Button </Button>)

    expect(screen.getByTestId('button-icon-right')).toBeInTheDocument()
    expect(screen.getByTestId('button-icon-right')).toBeVisible()
  })

  test('check button loading', () => {
    render(<Button isLoading="Loading..."> Button </Button>)

    expect(screen.getByTestId('button-loading')).toBeInTheDocument()
    expect(screen.getByTestId('button-loading')).toBeVisible()
    expect(screen.getByTestId('button-loading')).toHaveTextContent('Loading...')
  })

  test('check button loading with default text', () => {
    render(<Button isLoading> Button </Button>)

    expect(screen.getByTestId('button-loading')).toHaveTextContent('Button')
  })
})
