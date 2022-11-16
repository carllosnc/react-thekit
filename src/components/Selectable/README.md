# Selectable

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/Selectable
```

## Import

```tsx
import { Selectable, SelectableItem } from '@/components'
```

## Usage

```tsx
import { Selectable, SelectableItem } from '@/components'
import { useState } from 'react'

function App() {
  const [data, setData] = useState<string>(null)

  return (
    <Selectable
      start={1}
      onSelect={data => {
        setData(data)
      }}
    >
      <SelectableItem data={'foo'}>
        <p> Foo </p>
      </SelectableItem>

      <SelectableItem data={'bar'}>
        <p> Bar </p>
      </SelectableItem>

      <SelectableItem data={'span'}>
        <p> Span </p>
      </SelectableItem>
    </Selectable>
  )
}
```

## <Selectable/> Props

| name       | type                | default                  | description                        |
| ---------- | ------------------- | ------------------------ | ---------------------------------- |
| `children` | SelectableItem      | `undefined`              | wrapper to make blocks selectables |
| `start`    | number(1-n)         | `-1`(no match any index) | index to start selected            |
| `onSelect` | (data: any) => void | `undefined`              | event to select data               |

## <SelectableItem/> Props

| name   | type | default     | description         |
| ------ | ---- | ----------- | ------------------- |
| `data` | any  | `undefined` | data to be selected |
