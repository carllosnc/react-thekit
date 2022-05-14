import { Page } from '@/templates'
import { Reveal } from '@/components'

export default function RevealPage() {
  return (
    <Page>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Modal </h1>

          <hr />

          <div className="flex flex-col gap-4">
            <Reveal type="DOWN">
              <div className="w-full h-[100px] bg-gray-400 rounded-md" />
            </Reveal>

            <Reveal type="UP" delay={0.2}>
              <div className="w-full h-[100px] bg-gray-400 rounded-md" />
            </Reveal>

            <Reveal type="LEFT" delay={0.4}>
              <div className="w-full h-[100px] bg-gray-400 rounded-md" />
            </Reveal>

            <Reveal type="RIGHT" delay={0.6}>
              <div className="w-full h-[100px] bg-gray-400 rounded-md" />
            </Reveal>

            <Reveal type="SCALE" delay={0.8}>
              <div className="w-full h-[100px] bg-gray-400 rounded-md" />
            </Reveal>

            <Reveal type="ROTATE" delay={1}>
              <div className="w-full h-[100px] bg-gray-400 rounded-md" />
            </Reveal>
          </div>
        </div>
      </div>
    </Page>
  )
}
