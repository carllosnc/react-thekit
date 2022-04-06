import { Page } from '@/templates'
import { Expander } from '@/components'

export default function ExpanderPage() {
  return (
    <Page>
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Expander </h1>

          <hr />

          <p> Live example </p>

          <div className="flex flex-col gap-2">
            <Expander title="Expander 1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              fugit dolorum quaerat nesciunt. Sequi deleniti perferendis odit
              dignissimos quos recusandae esse. Hic quo tempora repellendus
              natus dolorum sequi, distinctio nihil.
            </Expander>

            <Expander title="Expander 2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              fugit dolorum quaerat nesciunt. Sequi deleniti perferendis odit
              dignissimos quos recusandae esse. Hic quo tempora repellendus
              natus dolorum sequi, distinctio nihil.
            </Expander>

            <Expander title="Expander 3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              fugit dolorum quaerat nesciunt. Sequi deleniti perferendis odit
              dignissimos quos recusandae esse. Hic quo tempora repellendus
              natus dolorum sequi, distinctio nihil, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Placeat cum maxime harum reiciendis
              suscipit? Culpa repellendus, blanditiis itaque excepturi dolores
              fugit voluptatem numquam mollitia atque ab perspiciatis architecto
              facilis cupiditate.
            </Expander>
          </div>
        </div>
      </div>
    </Page>
  )
}
