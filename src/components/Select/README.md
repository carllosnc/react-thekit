# Select

## Download

```
npx github-download-directory c4co/cn-react-thekit src/components/Select
```

## Import

```tsx
import { Select, SelectItem } from '@/components'
```

## Anatomy

`<Select />` extends `React.SelectHTMLAttributes<HTMLSelectElement>`, then you can use all props and event of `<select>`

## Usage

```typescript
import { Select, SelectItem } from '@/components'

function App() {
  const [selected, setSelected] = useState<number | string>(0)

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

| name          | type         | default     | description        |
| ------------- | ------------ | ----------- | ------------------ |
| `items`       | selectItem[] | `undefined` | select items       |
| `label`       | string       | `undefined` | select label       |
| `placeholder` | string       | `undefined` | select placeholder |
