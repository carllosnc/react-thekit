import { DocPage } from '@/templates'
import { Button, Drawer, useDrawer } from '@/components'

export default function DrawerPage({ doc }) {
  const [drawer1, openDrawer1, closeDrawer1] = useDrawer()

  return (
    <DocPage title="Drawer" markdown={doc}>
      <Drawer isOpen={drawer1} onClose={closeDrawer1}>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold"> Drawer example </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum
            hic atque, ipsam nihil omnis. Aperiam vero explicabo eligendi
            inventore saepe maiores!
          </p>
        </div>
      </Drawer>

      <div>
        <Button onClick={openDrawer1}> Open Drawer</Button>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Drawer/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
