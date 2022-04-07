import React from 'react'
import { render } from '@testing-library/react'
import { Syntax } from './Syntax'

const CODE_EXAMPLE = `
  function add(a: number, b: number){
    return (a + b)
  }
`

describe('<Syntax /> component', () => {
  test('check initial render', () => {
    const { getByTestId } = render(
      <Syntax lang="typescript">{CODE_EXAMPLE}</Syntax>
    )

    expect(getByTestId('syntax')).toBeInTheDocument()
    expect(getByTestId('syntax-copy')).toBeInTheDocument()
    expect(getByTestId('syntax-content')).toBeInTheDocument()
  })
})
