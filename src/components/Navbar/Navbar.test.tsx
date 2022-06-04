import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NavbarDropdown } from './NavbarDropdown'
import './Navbar.css'

describe('<Navbar/>', () => {
  test('check initial render ', () => {
    const { getByTestId, queryAllByTestId } = render(
      <Navbar>
        <a data-testid="navbar-item" href="https://dev.to">
          devto
        </a>
        <a data-testid="navbar-item" href="https://css-tricks.com/">
          css tricks
        </a>
      </Navbar>
    )

    expect(getByTestId('navbar')).toBeInTheDocument()
    expect(getByTestId('navbar')).toBeVisible()

    expect(getByTestId('navbar-content')).toBeInTheDocument()
    expect(getByTestId('navbar-content')).toBeVisible()

    expect(getByTestId('navbar-menu')).toBeInTheDocument()
    expect(getByTestId('navbar-menu')).toBeVisible()

    expect(getByTestId('navbar-overlay')).toBeInTheDocument()
    expect(getByTestId('navbar-overlay')).toBeVisible()

    expect(getByTestId('navbar-menu-open')).toBeInTheDocument()

    expect(queryAllByTestId('navbar-item').length).toBe(2)
  })

  test('check dropdown when mouse over', async () => {
    const { getByTestId, queryAllByTestId, queryByTestId } = render(
      <Navbar>
        <NavbarDropdown label="dropdown">
          <a data-testid="navbar-dropdown-item" href="https://dev.to">
            devto
          </a>
          <a data-testid="navbar-dropdown-item" href="https://css-tricks.com/">
            css tricks
          </a>
        </NavbarDropdown>
      </Navbar>
    )

    expect(getByTestId('navbar-dropdown')).toBeInTheDocument()
    expect(getByTestId('navbar-dropdown')).toBeVisible()

    expect(getByTestId('navbar-dropdown-label')).toBeInTheDocument()
    expect(getByTestId('navbar-dropdown-label')).toBeVisible()
    expect(getByTestId('navbar-dropdown-label')).toHaveTextContent('dropdown')

    expect(queryByTestId('navbar-dropdown-content')).toBeNull()

    fireEvent.mouseEnter(getByTestId('navbar-dropdown'))

    expect(queryByTestId('navbar-dropdown-content')).toBeInTheDocument()
    expect(queryByTestId('navbar-dropdown-content')).toBeVisible()

    queryAllByTestId('navbar-dropdown-item').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })
  })
})
