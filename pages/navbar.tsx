import { Page } from '@/templates'
import { Navbar, NavbarDropdown } from '@/components'
import Link from 'next/link'

function Brand() {
  return (
    <Link href="/">
      <a className="h-full bg-black text-white flex items-center px-3 rounded">
        TheKit
      </a>
    </Link>
  )
}

export default function NavbarPage() {
  return (
    <Page>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5 pt-16 pb-5 px-4 max-w-[600px] m-auto w-full">
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

          <h1 className="text-4xl"> Navbar </h1>

          <div className="bg-red-500 w-full h-[2000px]"></div>
        </div>
      </div>
    </Page>
  )
}
