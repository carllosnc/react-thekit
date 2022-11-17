# Image Block

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/ImageBlock
```

## Import

```jsx
import { ImageBlock } from '@/components'
```

## Dependencies

[React Lazy Load Component](https://github.com/loktar00/react-lazy-load)

```c
npm install react-icons
```

## Usage

```jsx
<BlockImage
  width={300}
  height={200}
  bgColor="#E7204D"
  src="https://images.unsplash.com/photo-1668442818706-fa6a47daa245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
/>
```

## Props

Block image extends `React.ImgHTMLAttributes<HTMLImageElement>` then you can use all `<img />`
properties.

| name      | type        | default     | description                                   |
| --------- | ----------- | ----------- | --------------------------------------------- |
| `bgColor` | string(hex) | `undefined` | backdrop that will show when image is loading |
