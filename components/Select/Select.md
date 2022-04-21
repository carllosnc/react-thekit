# Select

## Import

```tsx
import { Select, SelectItem } from '@/components'
```

## Usage

```tsx
import { Select, SelectItem } from '@/components'

function App() {
  const [selected, setSelected] = (useState < number) | (string > 0)

  const items: SelectItem[] = [
    {
      name: 'first',
      value: 1,
    },

    {
      name: 'second',
      value: 2,
    },

    {
      name: 'third',
      value: 3,
    },
  ]

  return (
    <div>
      <Select
        label="Select example"
        placeholder="Select an item"
        items={items}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setSelected(event.currentTarget.value)
        }}
      />

      <span> Selected value: {selected} </span>
    </div>
  )
}
```

## Props

| name        | type         | default | description        |
| ----------- | ------------ | ------- | ------------------ |
| items       | selectItem[] | null    | select items       |
| label       | string       | null    | select label       |
| placeholder | string       | null    | select placeholder |
