# Radio

## Import

```tsx
import { Radio, useRadio, RadioValue } from '@/components'
```

## Usage

```tsx
import { Radio, useRadio, RadioValue } from '@/components'

function App() {
  const [radioValue, changeHandle] = useRadio()

  const values: RadioValue[] = [
    {
      key: 'first item',
      value: 1,
    },
    {
      key: 'second item',
      value: 'value 2',
    },
    {
      key: 'third item',
      value: 'value 3',
    },
  ]

  useEffect(() => {
    console.log(radioValue)
  })

  return (
    <div>
      <Radio values={values} onChange={changeHandle} />
    </div>
  )
}
```

## Props

| name     | type         | default | description                                                            |
| -------- | ------------ | ------- | ---------------------------------------------------------------------- |
| values   | radioValue[] | null    | radio button keys and values                                           |
| onChange | Function     | null    | action to set radio value, this functions is provided by useRadio hook |

## useCheckbox

```tsx
const [radioValue, changeHandle] = useRadio()
```

| name         | type     | default   | description               |
| ------------ | -------- | --------- | ------------------------- |
| radioValue   | any      | values[0] | selected value from radio |
| changeHandle | function | none      | action to set radio value |
