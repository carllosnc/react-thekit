import { ReactNode, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

type NavbarDropdownProps = {
  children: ReactNode
  label: string
}

export function NavbarDropdown({ children, label }: NavbarDropdownProps) {
  const [drop, setDrop] = useState<boolean>(false)

  function close() {
    setDrop(false)
  }

  function open() {
    setDrop(true)
  }

  return (
    <div
      onMouseLeave={close}
      onMouseEnter={open}
      data-testid="navbar-dropdown"
      className="navbar__dropdown"
    >
      <span
        data-testid="navbar-dropdown-label"
        className="navbar__dropdown__label"
      >
        {label} <FiChevronDown />
      </span>

      {drop && (
        <div
          data-testid="navbar-dropdown-content"
          className="navbar__dropdown__content"
        >
          {children}
        </div>
      )}
    </div>
  )
}
