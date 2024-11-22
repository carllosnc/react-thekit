# Drawer

## Download

```c
npx github-download-directory carllosnc/react-thekit src/components/Drawer
```

## Import

```jsx
import { Drawer, useDrawer } from '@/components'
```

## Usage

```jsx
import { Drawer, useDrawer } from '@/components'

function App() {
  const [drawer, openDrawer, closeDrawer] = useDrawer()

  return (
    <div>
      <Drawer isOpen={drawer} onClose={closeDrawer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ipsa iusto corporis. Impedit quae cupiditate officiis tempore harum hic
        atque, ipsam nihil omnis. Aperiam vero explicabo eligendi inventore
        saepe maiores!
      </Drawer>

      <Button onClick={openDrawer}> Open Drawer </Button>
    </div>
  )
}
```

## Drawer Props

| name      | type     | default     | description                                       |
| --------- | -------- | ----------- | ------------------------------------------------- |
| `isOpen`  | boolean  | `false`     | determine if boolean is open or close             |
| `onClose` | function | `undefined` | action to close drawer provided by useDrawer hook |

## useModal

```javascript
const [drawer, openDrawer, closeDrawer] = useDrawer()
```

| name          | type       | description                   |
| ------------- | ---------- | ----------------------------- |
| `drawer`      | `boolean`  | state to open or close drawer |
| `openDrawer`  | `function` | function to open drawer       |
| `closeDrawer` | `function` | function to close drawer      |

## Calling multiple drawers

```javascript
const [drawer1, openDrawer1, closeDrawer1] = useDrawer()
const [drawer2, openDrawer2, closeDrawer2] = useDrawer()
const [drawer3, openDrawer3, closeDrawer3] = useDrawer()
```
