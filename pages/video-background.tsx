import { Page } from '@/templates'
import { VideoBackground } from '@/components'
import { TbSun } from 'react-icons/tb'

export default function VideoBackgroundPage() {
  return (
    <Page>
      <VideoBackground video="https://res.cloudinary.com/c4co/video/upload/q_59/v1654051142/thekit/video_lg54le.mp4">
        <div className="flex flex-col items-center gap-4 text-white text-center">
          <TbSun className="text-7xl animate-bounce" />
          <h1 className="text-8xl md:text-6xl font-bold"> thekit </h1>
          <p className="text-2xl md:text-xl"> video background example </p>
        </div>
      </VideoBackground>
    </Page>
  )
}
