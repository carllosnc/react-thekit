import { FiMenu } from 'react-icons/fi'
import { useState, MouseEvent, ReactNode } from 'react'

type NavbarProps = {
  children: ReactNode
  brand?: any
}

export function Navbar({ children, brand }: NavbarProps) {
  const [menu, setMenu] = useState<boolean>(false)

  function toggle() {
    setMenu(c => !c)
  }

  function close() {
    setMenu(false)
  }

  function stopPropagation(e: MouseEvent) {
    e.stopPropagation()
  }

  return (
    <div data-testid="navbar" className="navbar">
      <div data-testid="navbar-content" className="navbar__content">
        {brand && (
          <div data-testid="navbar-brand" className="navbar__brand">
            {brand}
          </div>
        )}

        <div
          onClick={close}
          data-testid="navbar-overlay"
          className={menu ? 'navbar__overlay--active' : 'navbar__overlay'}
        >
          <nav
            data-testid="navbar-menu"
            onClick={stopPropagation}
            className="navbar__menu"
          >
            {children}
          </nav>
        </div>

        <div
          data-testid="navbar-menu-open"
          onClick={toggle}
          className="navbar__open-menu"
        >
          <FiMenu />
        </div>
      </div>
    </div>
  )
}
