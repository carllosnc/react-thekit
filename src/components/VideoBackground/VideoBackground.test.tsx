import { render, screen } from '@testing-library/react'
import { VideoBackground } from './VideoBackground'

const videoUrl =
  'https://res.cloudinary.com/c4co/video/upload/q_59/v1654051142/thekit/video_lg54le.mp4'

describe('<VideoBackground /> component', () => {
  test('check initial render', () => {
    render(<VideoBackground video={videoUrl} />)

    expect(screen.getByTestId('video-background')).toBeInTheDocument()
    expect(screen.getByTestId('video-background')).toBeVisible()

    expect(screen.getByTestId('video-background-media')).toBeInTheDocument()
    expect(screen.getByTestId('video-background-media')).toBeVisible()

    expect(screen.getByTestId('video-background-content')).toBeInTheDocument()
    expect(screen.getByTestId('video-background-content')).toBeVisible()
  })
})
