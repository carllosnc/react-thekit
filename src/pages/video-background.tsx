import { DocPage } from '@/templates'
import { VideoBackground } from '@/components'
import { TbSun } from 'react-icons/tb'

export default function VideoBackgroundPage({ doc }) {
  return (
    <DocPage title="Video background" markdown={doc}>
      <VideoBackground video="https://videos.pexels.com/video-files/20315562/20315562-hd_1280_720_30fps.mp4">
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
