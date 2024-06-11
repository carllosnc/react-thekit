# Image Block

## Download

```c
npx github-download-directory carllosnc/cn-react-thekit src/components/ImageBlock
```

## Import

```jsx
import { ImageBlock } from '@/components'
```

## Dependencies

[React Lazy Load Component](https://github.com/loktar00/react-lazy-load)

```c
npm i -S react-lazy-load
```

## Usage

```jsx
<ImageBlock
  className="max-w-[400px]"
  width={300}
  height={200}
  bgColor="#E7204D"
  src="image-source-path"
/>
```

## Props

Block image extends `React.ImgHTMLAttributes<HTMLImageElement>` then you can use all `<img />`
properties.

| name      | type        | default     | description                                   |
| --------- | ----------- | ----------- | --------------------------------------------- |
| `bgColor` | string(hex) | `undefined` | backdrop that will show when image is loading |
