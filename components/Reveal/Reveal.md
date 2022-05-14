# Reveal

## Import

```jsx
import { Reveal } from '@/components'
```

## Usage

```jsx
import { Reveal } from '@/components'

function App() {
  return (
    <div>
      <Reveal type="DOWN">
        <div className="w-full h-[100px] bg-gray-400 rounded-md" />
      </Reveal>

      <Reveal type="UP" delay={0.2}>
        <div className="w-full h-[100px] bg-gray-400 rounded-md" />
      </Reveal>

      <Reveal type="LEFT" delay={0.4}>
        <div className="w-full h-[100px] bg-gray-400 rounded-md" />
      </Reveal>

      <Reveal type="RIGHT" delay={0.6}>
        <div className="w-full h-[100px] bg-gray-400 rounded-md" />
      </Reveal>

      <Reveal type="SCALE" delay={0.8}>
        <div className="w-full h-[100px] bg-gray-400 rounded-md" />
      </Reveal>

      <Reveal type="ROTATE" delay={1}>
        <div className="w-full h-[100px] bg-gray-400 rounded-md" />
      </Reveal>
    </div>
  )
}
```

## Reveal Props

| name     | type          | default | description             |
| -------- | ------------- | ------- | ----------------------- |
| children | ReactNode     | false   | component children      |
| delay    | number        | 0       | time to start animation |
| type     | animationType | DOWN    | animation type          |
| duration | number        | 0.9     | animation duration      |

animationType = DOWN | UP | LEFT | RIGHT | SCALE | ROTATE
