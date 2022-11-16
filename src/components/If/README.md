# If

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/If
```

## Import

```jsx
import { If, Else } from '@/components'
```

## Usage

```jsx
import { If, Else } from '@/components'

function App() {
  const condition: boolean = 10 > 20

  return (
    <div>
      <If condition={true}>
        <span>True condition</span>
      </If>

      <If condition={false}>
        <span>True condition</span>
      </If>

      <If condition={condition}>
        <span>True condition</span>

        <Else>
          <span>False condition</span>
        </Else>
      </If>
    </div>
  )
}
```

## Props

| name        | type         | default     | description              |
| ----------- | ------------ | ----------- | ------------------------ |
| `condition` | boolean      | `undefined` | condition to show or not |
| `children`  | ReactElement | `undefined` | component children       |
