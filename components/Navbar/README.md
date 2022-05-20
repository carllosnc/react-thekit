# Navbar

## Download

```
npx github-download-directory c4co/cn-react-thekit components/Navbar
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
            <a> Dropdown item 1</a>
          </Link>

          <Link href="/">
            <a> Dropdown item 2</a>
          </Link>
        </NavbarDropdown>

        <NavbarDropdown label="Dropdown 2">
          <Link href="/">
            <a> Dropdown item 1</a>
          </Link>

          <Link href="/">
            <a> Dropdown item 2</a>
          </Link>
        </NavbarDropdown>

        <Link href="/">
          <a>Item</a>
        </Link>

        <a target="_blank" rel="noreferrer" href="https://dev.to">
          External link
        </a>
      </Navbar>
    </div>
  )
}
```

## Navbar Props

| name     | type      | default | description  |
| -------- | --------- | ------- | ------------ |
| children | ReactNode | null    | navbar items |
| brand    | ReactNode | null    | navbar brand |

## NavbarDropdown Props

| name     | type      | default | description    |
| -------- | --------- | ------- | -------------- |
| children | ReactNode | null    | dropdown items |
| label    | string    | null    | dropdown label |
