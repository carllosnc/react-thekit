import { ReactNode } from 'react'

type VideoBackgroundProps = {
  video: string
  children?: ReactNode
  className?: string
}

export function VideoBackground({
  children,
  video,
  className,
}: VideoBackgroundProps) {
  return (
    <section className="relative flex justify-center center items-center w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 opacity-50 w-full bg-black h-screen z-10" />

      <video
        className="absolute z-0 w-auto saturate-150 min-w-full min-h-full max-w-none mix-blend-normal"
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="p-4 relative z-20">{children}</div>
    </section>
  )
}
