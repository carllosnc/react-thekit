# Syntax

## Import

```jsx
import { Syntax } from '@/components'
```

## Dependencies

[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

```
npm install react-syntax-highlighter
```

## Syntax

```jsx
import { Syntax } from '@/components'

const CODE_EXAMPLE = `
function add(a: number, b: number){
  return (a + b)
}
`

function App() {
  return <Syntax lang="typescript">{CODE_EXAMPLE}</Syntax>
}
```

## Modal Props

| name     | type   | default    | description                                          |
| -------- | ------ | ---------- | ---------------------------------------------------- |
| lang     | string | typescript | programing language, all syntax are provided by hljs |
| children | string | none       | code example                                         |
