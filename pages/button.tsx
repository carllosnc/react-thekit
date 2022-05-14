import { Page } from '@/templates'
import { Button } from '@/components'
import { MdStar, MdHeadset } from 'react-icons/md'

export default function ButtonPage() {
  return (
    <Page>
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Button </h1>

          <hr />

          <div className="flex flex-col gap-4">
            <p> Live Example </p>

            <div className="flex gap-4">
              <Button leftIcon={<MdStar />}>Button</Button>
              <Button rightIcon={<MdHeadset />}>Button</Button>
              <Button leftIcon={<MdStar />} rightIcon={<MdHeadset />}>
                Button
              </Button>
            </div>

            <div className="flex gap-4">
              <Button isLoading="Carregando...">Button</Button>
              <Button isLoading="Loading...">Button</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
