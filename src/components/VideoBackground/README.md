# Video background

## Download

```c
npx github-download-directory carllosnc/react-thekit src/components/VideoBackground
```

## Import

```jsx
import { VideoBackground } from '@/components'
```

## Example

```jsx
import { VideoBackground } from '@/components'

const videoUrl =
  'https://videos.pexels.com/video-files/20315562/20315562-hd_1280_720_30fps.mp4'

function App() {
  return <VideoBackground video={videoUrl}>...</VideoBackground>
}
```

## Props

| name    | type     | default | description  |
| ------- | -------- | ------- | ------------ |
| `video` | `string` | `null`  | video source |
