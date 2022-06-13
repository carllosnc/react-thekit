import { DocPage } from '@/templates'
import { Tabs, Tab } from '@/components'

export default function TabsPage({ doc }) {
  return (
    <DocPage title="Tabs" markdown={doc}>
      <Tabs labels={['Tab 0', 'Tab 1', 'Tab 2']}>
        <Tab>
          0 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dicta nulla doloremque et. Explicabo culpa delectus tempore, incidunt
          minus quam quibusdam tempora assumenda consequuntur dolore dolorem
          ipsa atque rem necessitatibus!
        </Tab>

        <Tab>
          1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dicta nulla doloremque et. Explicabo culpa delectus tempore, incidunt
          minus quam quibusdam tempora assumenda
        </Tab>

        <Tab>
          2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dicta nulla doloremque et. Explicabo culpa delectus tempore, incidunt
          minus quam quibusdam tempora assumenda consequuntur dolore dolorem
          ipsa atque rem necessitatibus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas dicta nulla doloremque et. Explicabo culpa
          delectus tempore, incidunt minus quam quibusdam tempora assumenda
          consequuntur dolore dolorem ipsa atque rem necessitatibus!
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
