import { Page } from '@/templates'
import { Radio, RadioValue, useRadio } from '@/components'
import { useEffect } from 'react'

export default function SyntaxPage() {
  const [radioValue, changeHandle] = useRadio()

  const values: RadioValue[] = [
    {
      key: 'first item',
      value: 'value 1',
    },
    {
      key: 'second item',
      value: 'value 2',
    },
    {
      key: 'third item',
      value: 'value 3',
    },
  ]

  useEffect(() => {
    console.log(radioValue)
  })

  return (
    <Page>
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Radio </h1>
          <hr />
          <Radio values={values} onChange={changeHandle} />
          <hr />
          Selected: {radioValue}
        </div>
      </div>
    </Page>
  )
}
