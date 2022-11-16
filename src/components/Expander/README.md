# Expander

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/Expander
```

## Import

```jsx
import { Expander } from '@/components'
```

## Usage

```jsx
import { Expander } from '@/components'

function App() {
  return (
    <div>
      <Expander title="Expander 1">...</Expander>
      <Expander title="Expander 2">...</Expander>
      <Expander title="Expander 3">...</Expander>
    </div>
  )
}
```

## Props

| name       | type   | default     | description      |
| ---------- | ------ | ----------- | ---------------- |
| `title`    | string | `undefined` | expander title   |
| `children` | any    | `undefined` | expander content |
