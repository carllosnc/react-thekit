import { ReactNode } from 'react'

type VideoBackgroundProps = {
  video: string
  children?: ReactNode
  className?: string
}

export function VideoBackground({ children, video }: VideoBackgroundProps) {
  return (
    <section data-testid="video-background" className="video-background">
      <video
        data-testid="video-background-media"
        className="video-background__media"
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        data-testid="video-background-content"
        className="video-background__content"
      >
        {children}
      </div>
    </section>
  )
}
