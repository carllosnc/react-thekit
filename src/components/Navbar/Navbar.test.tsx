import { render, fireEvent, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NavbarDropdown } from './NavbarDropdown'
import './Navbar.css'

describe('<Navbar/>', () => {
  test('check initial render ', () => {
    render(
      <Navbar>
        <a data-testid="navbar-item" href="https://dev.to">
          devto
        </a>
        <a data-testid="navbar-item" href="https://css-tricks.com/">
          css tricks
        </a>
      </Navbar>
    )

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeVisible()

    expect(screen.getByTestId('navbar-content')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-content')).toBeVisible()

    expect(screen.getByTestId('navbar-menu')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-menu')).toBeVisible()

    expect(screen.getByTestId('navbar-overlay')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-overlay')).toBeVisible()

    expect(screen.getByTestId('navbar-menu-open')).toBeInTheDocument()

    expect(screen.queryAllByTestId('navbar-item').length).toBe(2)
  })

  test('check dropdown when mouse over', async () => {
    render(
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

    expect(screen.getByTestId('navbar-dropdown')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-dropdown')).toBeVisible()

    expect(screen.getByTestId('navbar-dropdown-label')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-dropdown-label')).toBeVisible()
    expect(screen.getByTestId('navbar-dropdown-label')).toHaveTextContent(
      'dropdown'
    )

    expect(screen.queryByTestId('navbar-dropdown-content')).toBeNull()

    fireEvent.mouseEnter(screen.getByTestId('navbar-dropdown'))

    expect(screen.getByTestId('navbar-dropdown-content')).toBeInTheDocument()
    expect(screen.queryByTestId('navbar-dropdown-content')).toBeVisible()

    screen.queryAllByTestId('navbar-dropdown-item').forEach(item => {
      expect(item).toBeInTheDocument()
      expect(item).toBeVisible()
    })
  })
})
