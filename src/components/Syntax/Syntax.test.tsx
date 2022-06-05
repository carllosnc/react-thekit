import { render, screen } from '@testing-library/react'
import { Syntax } from './Syntax'

const CODE_EXAMPLE = `
  function add(a: number, b: number){
    return (a + b)
  }
`

describe('<Syntax /> component', () => {
  test('check initial render', () => {
    render(<Syntax lang="typescript">{CODE_EXAMPLE}</Syntax>)

    expect(screen.getByTestId('syntax')).toBeInTheDocument()
    expect(screen.getByTestId('syntax-copy')).toBeInTheDocument()
    expect(screen.getByTestId('syntax-content')).toBeInTheDocument()
  })
})
