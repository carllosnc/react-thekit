import { Page } from '@/templates'
import { Expander } from '@/components'

export default function ExpanderPage() {
  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Expander </h1>

        <hr />

        <div className="page-component__content">
          <Expander title="Expander 1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            fugit dolorum quaerat nesciunt. Sequi deleniti perferendis odit
            dignissimos quos recusandae esse. Hic quo tempora repellendus natus
            dolorum sequi, distinctio nihil.
          </Expander>

          <Expander title="Expander 2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            fugit dolorum quaerat nesciunt. Sequi deleniti perferendis odit
            dignissimos quos recusandae esse. Hic quo tempora repellendus natus
            dolorum sequi, distinctio nihil.
          </Expander>

          <Expander title="Expander 3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            fugit dolorum quaerat nesciunt. Sequi deleniti perferendis odit
            dignissimos quos recusandae esse. Hic quo tempora repellendus natus
            dolorum sequi, distinctio nihil, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat cum maxime harum reiciendis
            suscipit? Culpa repellendus, blanditiis itaque excepturi dolores
            fugit voluptatem numquam mollitia atque ab perspiciatis architecto
            facilis cupiditate.
          </Expander>
        </div>
      </div>
    </Page>
  )
}
