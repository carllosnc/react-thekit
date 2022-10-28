# ImageExpander

## Download

```
npx github-download-directory c4co/cn-react-thekit src/components/ImageExpander
```

## Import

```jsx
import { ImageExpander } from '@/components'
```

## Usage

```javascript
import { ImageExpander } from '@/components'
import Image from 'next/image'

const images = [
  {
    src: 'path/to/image.png',
    width: 700,
    height: 1000,
  },
  {
    src: 'path/to/image.png',
    width: 600,
    height: 600,
  },
  {
    src: 'path/to/image.png',
    width: 800,
    height: 500,
  },
  {
    src: 'path/to/image.png',
    width: 600,
    height: 600,
  },
]

function App() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((item, index) => {
        return (
          <ImageExpander
            key={key()}
            thumb={
              <Image
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL={item.src}
                alt="image"
                objectPosition="center"
                src={item.src}
              />
            }
            full={
              <Image
                alt="image"
                src={item.src}
                placeholder="blur"
                blurDataURL={item.src}
                width={item.width}
                height={item.height}
              />
            }
          ></ImageExpander>
        )
      })}
    </div>
  )
}
```

## Props

| name       | type         | default     | description |
| ---------- | ------------ | ----------- | ----------- |
| `normal`   | ReactElement | `undefined` | thumbnail   |
| `expanded` | ReactElement | `undefined` | full image  |
