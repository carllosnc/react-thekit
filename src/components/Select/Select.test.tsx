import { render, screen } from '@testing-library/react'
import { Select, SelectItem } from './Select'

describe('<Select /> component', () => {
  const items: SelectItem[] = [
    {
      name: 'first',
      value: 1,
    },

    {
      name: 'second',
      value: 2,
    },

    {
      name: 'third',
      value: 3,
    },
  ]

  test('check initial render', () => {
    render(<Select items={items} />)

    expect(screen.getByTestId('select')).toBeInTheDocument()
    expect(screen.getByTestId('select')).toBeVisible()

    expect(screen.getByTestId('select-content')).toBeInTheDocument()
    expect(screen.getByTestId('select-content')).toBeVisible()

    expect(screen.getByTestId('select-arrow')).toBeInTheDocument()
    expect(screen.getByTestId('select-arrow')).toBeVisible()
  })

  test('check label', () => {
    render(<Select label="select label" items={items} />)

    expect(screen.getByTestId('select-label')).toBeInTheDocument()
    expect(screen.getByTestId('select-label')).toBeVisible()
    expect(screen.getByTestId('select-label')).toHaveTextContent('select label')
  })

  test('check placeholder', () => {
    render(<Select placeholder="input placeholder" items={items} />)

    expect(screen.getByTestId('select-placeholder')).toBeInTheDocument()
    expect(screen.getByTestId('select-placeholder')).toHaveTextContent(
      'input placeholder'
    )
  })

  test('check options', () => {
    render(<Select items={items} />)

    expect(screen.queryAllByTestId('select-option').length).toBe(items.length)

    screen.queryAllByTestId('select-option').forEach(item => {
      expect(item).toBeInTheDocument()
    })
  })
})
