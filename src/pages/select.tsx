import { Page } from '@/templates'
import { Select, SelectItem } from '@/components'
import React, { useState } from 'react'

export default function SelectPage() {
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
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Select </h1>

        <hr />

        <div className="page-component__content">
          <p> Live Example </p>

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
      </div>
    </Page>
  )
}
