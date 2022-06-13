import { DocPage } from '@/templates'
import { Select, SelectItem } from '@/components'
import React, { useState } from 'react'

export default function SelectPage({ doc }) {
  const [selected, setSelected] = useState<number | string>(0)

  const items: SelectItem[] = [
    {
      name: 'first',
      value: 1,
    },

    {
      name: 'second',
      value: 2,
    },

    {
      name: 'third',
      value: 3,
    },
  ]

  return (
    <DocPage title="Select" markdown={doc}>
      <div className="flex flex-col gap-4">
        <Select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelected(event.currentTarget.value)
          }}
          placeholder="Select an item"
          items={items}
        />
        <hr />
        <span> Selected value: {selected} </span>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Select/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
