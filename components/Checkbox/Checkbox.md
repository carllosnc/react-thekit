# Checkbox

## Import

```tsx
import { Checkbox, useCheckbox } from '@/components'
```

## Usage

```tsx
import { Checkbox, useCheckbox } from '@/components'

function App() {
  const [check1, toggleCheck1] = useCheckbox()
  const [check2, toggleCheck2] = useCheckbox()
  const [check3, toggleCheck3] = useCheckbox()

  return (
    <div>
      <Checkbox label="checkbox 1" isChecked={check1} toggle={togleCheck1} />
      <Checkbox label="checkbox 2" isChecked={check2} toggle={togleCheck2} />
      <Checkbox label="checkbox 3" isChecked={check3} toggle={togleCheck3} />
    </div>
  )
}
```

## Props

| name      | type     | default | description                                                       |
| --------- | -------- | ------- | ----------------------------------------------------------------- |
| label     | string   | none    | checkbox description                                              |
| isChecked | boolean  | false   | determine if checkbox is checked or not                           |
| toggle    | function | none    | action to check and uncheck checkbox provided by useCheckbox hook |

## useCheckbox

```tsx
const [check, togle] = useCheckbox()
```

| name   | type     | default | description                             |
| ------ | -------- | ------- | --------------------------------------- |
| check  | boolean  | false   | determine if checkbox is checked or not |
| toggle | function | none    | action to set check state               |
