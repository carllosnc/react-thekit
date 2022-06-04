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
      <div className="page-component">
        <h1 className="page-component__title"> Radio </h1>

        <hr />

        <div className="page-component__content">
          <Radio values={values} onChange={changeHandle} />
          <hr />
          Selected: {radioValue}
        </div>
      </div>
    </Page>
  )
}
