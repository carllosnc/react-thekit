# Navbar

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/Navbar
```

## Import

```jsx
import { Navbar, NavbarDropdown } from '@/components'
```

## Usage

```jsx
import { Navbar, NavbarDropdown } from '@/components'
import Link from 'next/link'

function App() {
  function Brand() {
    return (
      <Link href="/">
        <a className="h-full bg-black text-white flex items-center px-3 rounded">
          TheKit
        </a>
      </Link>
    )
  }

  return (
    <div>
      <Navbar brand={<Brand />}>
        <NavbarDropdown label="Dropdown 1">
          <Link href="/">
            <span> Dropdown item 1</span>
          </Link>

          <Link href="/">
            <span> Dropdown item 2</span>
          </Link>
        </NavbarDropdown>

        <NavbarDropdown label="Dropdown 2">
          <Link href="/">
            <span> Dropdown item 1</span>
          </Link>

          <Link href="/">
            <span> Dropdown item 2</span>
          </Link>
        </NavbarDropdown>

        <Link href="/">
          <span>Item</span>
        </Link>

        <a target="_blank" rel="noreferrer" href="https://dev.to">
          External link
        </span>
      </Navbar>
    </div>
  )
}
```

## Navbar Props

| name       | type      | default     | description  |
| ---------- | --------- | ----------- | ------------ |
| `children` | ReactNode | `undefined` | navbar items |
| `brand`    | ReactNode | `undefined` | navbar brand |

## NavbarDropdown Props

| name       | type      | default     | description    |
| ---------- | --------- | ----------- | -------------- |
| `children` | ReactNode | `undefined` | dropdown items |
| `label`    | string    | `undefined` | dropdown label |
