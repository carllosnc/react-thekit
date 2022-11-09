import { DocPage } from '@/templates'
import { Selectable, SelectableItem } from '@/components'
import { useState } from 'react'

export default function SelectPage({ doc }) {
  const [data, setData] = useState<string>(null)

  return (
    <DocPage title="Selectable" markdown={doc}>
      <Selectable
        start={1}
        onSelect={data => {
          setData(data)
        }}
      >
        <SelectableItem data={'foo'}>
          <p> Foo </p>
        </SelectableItem>

        <SelectableItem data={'bar'}>
          <p> Bar </p>
        </SelectableItem>

        <SelectableItem data={'span'}>
          <p> Span </p>
        </SelectableItem>
      </Selectable>

      <br />

      <p className="text-gray-600">
        Selected item: <b>{data ?? 'null'}</b>
      </p>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Selectable/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
