import { Page } from '@/templates'
import { Navbar, NavbarDropdown } from '@/components'
import Link from 'next/link'

function Brand() {
  return (
    <Link href="/">
      <a className="h-full bg-gray-800 text-white flex items-center px-3 rounded">
        TheKit
      </a>
    </Link>
  )
}

export default function NavbarPage() {
  return (
    <Page>
      <div className="page-component">
        <br />

        <h1 className="page-component__title"> Navbar </h1>

        <hr />

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
            <a>Internal item</a>
          </Link>

          <a target="_blank" rel="noreferrer" href="https://dev.to">
            External item
          </a>
        </Navbar>

        <div className="page-component__content">
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
          <div className="bg-gray-200 w-full h-[200px] rounded-md" />
        </div>
      </div>
    </Page>
  )
}
