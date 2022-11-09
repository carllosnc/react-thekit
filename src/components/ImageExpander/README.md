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

```jsx
import { ImageExpander } from '@/components'
import Image from 'next/image'

const images = [
  'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/02_zxxfjf.webp',
  'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/05_gm0bmx.webp',
  'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/04_hnipyy.webp',
  'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/03_vw6qtt.webp',
  'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/01_kmi288.webp',
  'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/06_c1cu6c.webp',
]

function App() {
  return (
    <div className="grid grid-cols-3">
      {images.map(item => {
        return (
          <ImageExpander
            key={key()}
            thumb={
              <img
                className="object-cover h-[200px] w-full sm:h-[100px]"
                alt="image"
                src={item}
              />
            }
            full={<img alt="image" src={item} />}
          ></ImageExpander>
        )
      })}
    </div>
  )
}
```

## Props

| name    | type         | default     | description |
| ------- | ------------ | ----------- | ----------- |
| `thumb` | ReactElement | `undefined` | thumbnail   |
| `full`  | ReactElement | `undefined` | full image  |
