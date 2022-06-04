import { render } from '@testing-library/react'
import { VideoBackground } from './VideoBackground'

const videoUrl =
  'https://res.cloudinary.com/c4co/video/upload/q_59/v1654051142/thekit/video_lg54le.mp4'

describe('<VideoBackground /> component', () => {
  test('check initial render', () => {
    const { getByTestId } = render(<VideoBackground video={videoUrl} />)

    expect(getByTestId('video-background')).toBeInTheDocument()
    expect(getByTestId('video-background')).toBeVisible()

    expect(getByTestId('video-background-media')).toBeInTheDocument()
    expect(getByTestId('video-background-media')).toBeVisible()

    expect(getByTestId('video-background-content')).toBeInTheDocument()
    expect(getByTestId('video-background-content')).toBeVisible()
  })
})
