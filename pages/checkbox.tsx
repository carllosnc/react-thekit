import { Page } from '@/templates'
import { Checkbox, useCheckbox } from '@/components'
import { useEffect } from 'react'

export default function ExpanderPage() {
  const [check1, togleCheck1] = useCheckbox()
  const [check2, togleCheck2] = useCheckbox()
  const [check3, togleCheck3] = useCheckbox()

  useEffect(() => {
    console.log('check1', check1)
    console.log('check2', check2)
    console.log('check3', check3)
  })

  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Checkbox </h1>

        <hr />

        <div className="page-component__content">
          <Checkbox
            label="Checkbox 1"
            isChecked={check1}
            toggle={togleCheck1}
          />

          <Checkbox
            label="Checkbox 2"
            isChecked={check2}
            toggle={togleCheck2}
          />

          <Checkbox
            label="Checkbox 3"
            isChecked={check3}
            toggle={togleCheck3}
          />
        </div>
      </div>
    </Page>
  )
}
