# Carousel

## Download

```
npx github-download-directory c4co/cn-react-thekit src/components/Carousel
```

## Import

```tsx
import { Carousel } from '@/components'
```

## Usage

```tsx
import { Carousel } from '@/components'
import Image from 'next/image'

function MyImage({ src }: any) {
  return (
    <Image
      key={111}
      width={600}
      height={450}
      placeholder="blur"
      blurDataURL={src}
      alt="image"
      objectFit="cover"
      src={src}
    />
  )
}

function App() {
  return (
    <div>
      <Carousel
        dots
        items={[
          <MyImage
            key={111}
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2568&q=80"
          />,

          <MyImage
            key={222}
            src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
          />,

          <MyImage
            key={333}
            src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          />,

          <MyImage
            key={333}
            src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />,
        ]}
      />
    </div>
  )
}
```

## Props

| name    | type      | default     | description    |
| ------- | --------- | ----------- | -------------- |
| `items` | ReactNode | `undefined` | carousel items |
| `dots`  | bollean   | `false`     | carousel dots  |
