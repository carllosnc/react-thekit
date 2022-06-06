# Tabs

## Download

```
npx github-download-directory c4co/cn-react-thekit src/components/Tabs
```

## Import

```jsx
import { Tabs, Tab } from '@/components'
```

## Usage

```jsx
import { Tabs, Tab } from '@/components'

function App() {
  return (
    <div>
      <Tabs labels={['tab1', 'tab2', 'tab3']}>
        <Tab>
          <div> tab-content-0 </div>
        </Tab>

        <Tab>
          <div> tab-content-1 </div>
        </Tab>

        <Tab>
          <div> tab-content-2 </div>
        </Tab>
      </Tabs>
    </div>
  )
}
```

## Tabs Props

| name       | type           | default     | description |
| ---------- | -------------- | ----------- | ----------- |
| `labels`   | array          | `undefined` | tab labels  |
| `children` | ReactElement[] | `undefined` | tab content |
