# Video background

## Download

```c
npx github-download-directory c4co/cn-react-thekit src/components/VideoBackground
```

## Import

```jsx
import { VideoBackground } from '@/components'
```

## Example

```jsx
import { VideoBackground } from '@/components'

const videoUrl =
  'https://res.cloudinary.com/c4co/video/upload/q_59/v1654051142/thekit/video_lg54le.mp4'

function App() {
  return <VideoBackground video={videoUrl}>...</VideoBackground>
}
```

## Props

| name    | type     | default | description  |
| ------- | -------- | ------- | ------------ |
| `video` | `string` | `null`  | video source |
