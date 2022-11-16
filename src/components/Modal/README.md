# Modal

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/Modal
```

## Import

```jsx
import { Modal, useModal } from '@/components'
```

## Usage

```jsx
import { Modal, useModal } from '@/components'

function App() {
  const [modal, openModal, closeModal] = useModal()

  return (
    <div>
      <Modal isOpen={modal} onClose={closeModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum hic
        atque, ipsam nihil omnis. Aperiam vero explicabo eligendi inventore
        saepe maiores!
      </Modal>

      <Button onClick={openModal}> Open Modal </Button>
    </div>
  )
}
```

## Modal Props

| name      | type     | default     | description                                     |
| --------- | -------- | ----------- | ----------------------------------------------- |
| `isOpen`  | boolean  | `false`     | determine if boolean is open or close           |
| `onClose` | function | `undefined` | action to close modal provided by useModal hook |

## useModal

```javascript
const [modal, openModal, closeModal] = useModal()
```

| name         | type       | description                  |
| ------------ | ---------- | ---------------------------- |
| `modal`      | `boolean`  | state to open or close modal |
| `openModal`  | `function` | function to open modal       |
| `closeModal` | `function` | function to close modal      |

## Calling multiple modals

```javascript
const [modal1, openModal1, closeModal1] = useModal()
const [modal2, openModal2, closeModal2] = useModal()
const [modal3, openModal3, closeModal3] = useModal()
```
