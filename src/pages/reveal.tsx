import { DocPage } from '@/templates'
import { Reveal } from '@/components'

export default function RevealPage({ doc }) {
  return (
    <DocPage title="Reveal" markdown={doc}>
      <div className="w-full flex flex-col gap-4">
        <Reveal type="DOWN">
          <div className="w-full h-[100px] bg-neutral-400 rounded-md" />
        </Reveal>

        <Reveal type="UP" delay={0.2}>
          <div className="w-full h-[100px] bg-neutral-400 rounded-md" />
        </Reveal>

        <Reveal type="LEFT" delay={0.4}>
          <div className="w-full h-[100px] bg-neutral-400 rounded-md" />
        </Reveal>

        <Reveal type="RIGHT" delay={0.6}>
          <div className="w-full h-[100px] bg-neutral-400 rounded-md" />
        </Reveal>

        <Reveal type="SCALE" delay={0.8}>
          <div className="w-full h-[100px] bg-neutral-400 rounded-md" />
        </Reveal>

        <Reveal type="ROTATE" delay={1}>
          <div className="w-full h-[100px] bg-neutral-400 rounded-md" />
        </Reveal>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Reveal/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
