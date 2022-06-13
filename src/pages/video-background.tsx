import { DocPage } from '@/templates'
import { VideoBackground } from '@/components'
import { TbSun } from 'react-icons/tb'

export default function VideoBackgroundPage({ doc }) {
  return (
    <DocPage title="Video background" markdown={doc}>
      <VideoBackground video="https://res.cloudinary.com/c4co/video/upload/q_59/v1654051142/thekit/video_lg54le.mp4">
        <div className="flex flex-col items-center gap-4 text-white text-center">
          <TbSun className="text-7xl animate-bounce" />
          <h1 className="text-6xl md:text-6xl font-bold"> thekit </h1>
        </div>
      </VideoBackground>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/VideoBackground/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
