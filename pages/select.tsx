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
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Select </h1>

          <hr />

          <div className="flex flex-col gap-4">
            <p> Live Example </p>

            <Select
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelected(event.currentTarget.value)
              }}
              placeholder="Select an item"
              items={items}
            />

            <span> Selected value: {selected} </span>
          </div>
        </div>
      </div>
    </Page>
  )
}
