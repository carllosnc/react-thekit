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
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Checkbox </h1>

          <hr />

          <p> Live example </p>

          <div className="flex flex-col gap-2">
            <Checkbox
              label="checkbox 1"
              isChecked={check1}
              toggle={togleCheck1}
            />

            <Checkbox
              label="checkbox 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit"
              isChecked={check2}
              toggle={togleCheck2}
            />

            <Checkbox
              label="checkbox 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad eius ipsa, vel porro expedita perferendis, numquam atque soluta, est ut accusantium. Alias fugiat impedit, vero ducimus placeat architecto ipsum."
              isChecked={check3}
              toggle={togleCheck3}
            />
          </div>
        </div>
      </div>
    </Page>
  )
}
