import React from 'react'
import { render } from '@testing-library/react'
import { Welcome } from './welcome'

describe('<Welcome /> component', () => {
  test('Check initial render', () => {
    const { getByTestId } = render(<Welcome />)
    expect(getByTestId('welcome')).toBeInTheDocument()
    expect(getByTestId('title')).toBeInTheDocument()
    expect(getByTestId('description')).toBeInTheDocument()
    expect(getByTestId('version')).toBeInTheDocument()
  })
})
