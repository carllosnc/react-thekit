import { DocPage } from '@/templates'
import { Radio, RadioValue, useRadio } from '@/components'
import { useEffect } from 'react'

export default function RadioPage({ doc }) {
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
    <DocPage markdown={doc} title="Radio">
      <div className="flex flex-col gap-4">
        <Radio values={values} onChange={changeHandle} />
        <hr />
        Selected: {radioValue}
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Radio/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
