import { DocPage } from '@/templates'
import { Tabs, Tab } from '@/components'

export default function TabsPage({ doc }) {
  return (
    <DocPage title="Tabs" markdown={doc}>
      <Tabs labels={['Tab 0', 'Tab 1', 'Tab 2']}>
        <Tab>
          <p className="text-neutral-700">
            0 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas dicta nulla doloremque et. Explicabo culpa delectus
            tempore, incidunt minus quam quibusdam tempora assumenda
            consequuntur dolore dolorem ipsa atque rem necessitatibus!
          </p>
        </Tab>

        <Tab>
          <p className="text-neutral-700">
            1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas dicta nulla doloremque et. Explicabo culpa delectus
            tempore, incidunt minus quam quibusdam tempora assumenda
          </p>
        </Tab>

        <Tab>
          <p className="text-neutral-700">
            2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas dicta nulla doloremque et. Explicabo culpa delectus
            tempore, incidunt minus quam quibusdam tempora assumenda
            consequuntur dolore dolorem ipsa atque rem necessitatibus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta
            nulla doloremque et. Explicabo culpa delectus tempore, incidunt
            minus quam quibusdam tempora assumenda consequuntur dolore dolorem
            ipsa atque rem necessitatibus!
          </p>
        </Tab>
      </Tabs>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Tabs/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
