import { Page } from '@/templates'
import { Button, If, Else } from '@/components'
import { useState } from 'react'

export default function IfPage() {
  const [condition, setCondition] = useState(true)

  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> If (condition) </h1>

        <hr />

        <div className="page-component__content">
          <div>
            <Button onClick={() => setCondition(c => !c)}>
              Toggle condition
            </Button>
          </div>

          <If condition={true}>
            <span
              className="font-bold text-red-500"
              data-testid="true-condition"
            >
              True condition
            </span>
          </If>

          <If condition={false}>
            <span
              className="font-bold text-red-500"
              data-testid="true-condition"
            >
              True condition
            </span>
          </If>

          <If condition={condition}>
            <span
              className="font-bold text-red-500"
              data-testid="true-condition"
            >
              True condition
            </span>

            <Else>
              <span
                className="font-bold text-blue-500"
                data-testid="true-condition"
              >
                False condition
              </span>
            </Else>
          </If>
        </div>
      </div>
    </Page>
  )
}
