import { Page } from '@/templates'
import { Modal, useModal, Button } from '@/components'

export default function ModalPage() {
  const [modal1, openModal1, closeModal1] = useModal()

  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Modal </h1>

        <hr />

        <div className="page-component__content">
          <Modal isOpen={modal1} onClose={closeModal1}>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold"> Modal example </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsa iusto corporis. Impedit quae cupiditate
                officiis tempore harum hic atque, ipsam nihil omnis. Aperiam
                vero explicabo eligendi inventore saepe maiores!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsa iusto corporis. Impedit quae cupiditate
                officiis tempore harum hic atque, ipsam nihil omnis. Aperiam
                vero explicabo eligendi inventore saepe maiores!
              </p>
            </div>
          </Modal>

          <div>
            <Button onClick={openModal1}> Open Modal </Button>
          </div>
        </div>
      </div>
    </Page>
  )
}
