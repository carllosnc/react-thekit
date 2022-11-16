# Radio

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/Radio
```

## Import

```typescript
import { Radio, useRadio, RadioValue } from '@/components'
```

## Usage

```typescript
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

| name       | type         | default     | description                                                            |
| ---------- | ------------ | ----------- | ---------------------------------------------------------------------- |
| `values`   | radioValue[] | `undefined` | radio button keys and values                                           |
| `onChange` | Function     | `undefined` | action to set radio value, this functions is provided by useRadio hook |

## useCheckbox

```typescript
const [radioValue, changeHandle] = useRadio()
```

| name           | type     | default     | description               |
| -------------- | -------- | ----------- | ------------------------- |
| `radioValue`   | any      | `values[0]` | selected value from radio |
| `changeHandle` | function | `undefined` | action to set radio value |
