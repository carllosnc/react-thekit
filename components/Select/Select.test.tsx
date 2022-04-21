import React from 'react'
import { render } from '@testing-library/react'
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
    const { getByTestId } = render(<Select items={items} />)

    expect(getByTestId('select')).toBeInTheDocument()
    expect(getByTestId('select')).toBeVisible()

    expect(getByTestId('select-content')).toBeInTheDocument()
    expect(getByTestId('select-content')).toBeVisible()

    expect(getByTestId('select-arrow')).toBeInTheDocument()
    expect(getByTestId('select-arrow')).toBeVisible()
  })

  test('check label', () => {
    const { getByTestId } = render(
      <Select label="select label" items={items} />
    )

    expect(getByTestId('select-label')).toBeInTheDocument()
    expect(getByTestId('select-label')).toBeVisible()
    expect(getByTestId('select-label')).toHaveTextContent('select label')
  })

  test('check placeholder', () => {
    const { getByTestId } = render(
      <Select placeholder="input placeholder" items={items} />
    )

    expect(getByTestId('select-placeholder')).toBeInTheDocument()
    expect(getByTestId('select-placeholder')).toHaveTextContent(
      'input placeholder'
    )
  })

  test('check options', () => {
    const { queryAllByTestId } = render(<Select items={items} />)

    expect(queryAllByTestId('select-option').length).toBe(items.length)

    queryAllByTestId('select-option').forEach(item => {
      expect(item).toBeInTheDocument()
    })
  })
})
