import { DocPage } from '@/templates'
import { Checkbox, useCheckbox } from '@/components'
import { useEffect } from 'react'

export default function CheckboxPage({ doc }) {
  const [check1, togleCheck1] = useCheckbox()
  const [check2, togleCheck2] = useCheckbox()
  const [check3, togleCheck3] = useCheckbox()

  useEffect(() => {
    console.log('check1', check1)
    console.log('check2', check2)
    console.log('check3', check3)
  })

  return (
    <DocPage title="Checkbox" markdown={doc}>
      <div className="flex flex-col gap-4">
        <Checkbox label="Checkbox 1" isChecked={check1} toggle={togleCheck1} />
        <Checkbox label="Checkbox 2" isChecked={check2} toggle={togleCheck2} />
        <Checkbox label="Checkbox 3" isChecked={check3} toggle={togleCheck3} />
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Checkbox/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
