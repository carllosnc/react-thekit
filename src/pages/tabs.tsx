import { Page } from '@/templates'
import { Tabs, Tab } from '@/components'

export default function TabsPage() {
  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Tabs </h1>

        <hr />

        <div className="page-component__content">
          <Tabs labels={['Tab 0', 'Tab 1', 'Tab 2']}>
            <Tab>
              0 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas dicta nulla doloremque et. Explicabo culpa delectus
              tempore, incidunt minus quam quibusdam tempora assumenda
              consequuntur dolore dolorem ipsa atque rem necessitatibus!
            </Tab>

            <Tab>
              1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas dicta nulla doloremque et. Explicabo culpa delectus
              tempore, incidunt minus quam quibusdam tempora assumenda
            </Tab>

            <Tab>
              2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas dicta nulla doloremque et. Explicabo culpa delectus
              tempore, incidunt minus quam quibusdam tempora assumenda
              consequuntur dolore dolorem ipsa atque rem necessitatibus! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta
              nulla doloremque et. Explicabo culpa delectus tempore, incidunt
              minus quam quibusdam tempora assumenda consequuntur dolore dolorem
              ipsa atque rem necessitatibus!
            </Tab>
          </Tabs>
        </div>
      </div>
    </Page>
  )
}
