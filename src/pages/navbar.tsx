import { DocPage } from '@/templates'
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

export default function NavbarPage({ doc }) {
  return (
    <DocPage title="Navbar" markdown={doc}>
      <p> Navbar is there ☝️ </p>
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
            <a>Internal item</a>
          </Link>

          <a target="_blank" rel="noreferrer" href="https://dev.to">
            External item
          </a>
        </Navbar>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Navbar/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
