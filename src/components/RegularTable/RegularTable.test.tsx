import { render, screen } from '@testing-library/react'
import { RegularTable } from './RegularTable'

describe('<RegularTable> component', () => {
  const data = [
    {
      name: 'Mikayla',
      address: '141 Franecki Fields',
      phone: '(262) 410-1919 x882',
    },

    {
      name: 'Karlee',
      address: '6495 Cole Burg',
      phone: '471.210.8598',
    },

    {
      name: 'Abel',
      address: '5848 Brooks Landing',
      phone: '1-386-472-5151 x17037',
    },
  ]

  test.only('check initial render', () => {
    render(<RegularTable data={data} />)

    expect(screen.getByTestId('rt-wrapper')).toBeInTheDocument()
    expect(screen.getByTestId('rt-wrapper')).toBeVisible()

    expect(screen.getByTestId('rt-table')).toBeInTheDocument()
    expect(screen.getByTestId('rt-table')).toBeVisible()

    expect(screen.getByTestId('rt-theader')).toBeInTheDocument()
    expect(screen.getByTestId('rt-theader')).toBeVisible()

    expect(screen.getAllByTestId('rt-title').length).toBe(3)

    expect(screen.getByTestId('rt-tbody')).toBeInTheDocument()
    expect(screen.getByTestId('rt-tbody')).toBeVisible()

    expect(screen.getAllByTestId('rt-item').length).toBe(9)
  })
})
