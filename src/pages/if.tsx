import { DocPage } from '@/templates'
import { Button, If, Else } from '@/components'
import { useState } from 'react'

export default function IfPage({ doc }) {
  const [condition, setCondition] = useState(true)

  return (
    <DocPage title="If (component)" markdown={doc}>
      <div className="flex flex-col gap-4">
        <div>
          <Button onClick={() => setCondition(c => !c)}>
            Toggle condition
          </Button>
        </div>

        <If condition={true}>
          <span className="font-bold text-red-500" data-testid="true-condition">
            True condition
          </span>
        </If>

        <If condition={false}>
          <span className="font-bold text-red-500" data-testid="true-condition">
            True condition
          </span>
        </If>

        <If condition={condition}>
          <span className="font-bold text-red-500" data-testid="true-condition">
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
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/If/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
