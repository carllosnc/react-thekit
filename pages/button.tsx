import { Page } from '@/templates'
import { Button } from '@/components'
import { MdStar, MdHeadset } from 'react-icons/md'

export default function ButtonPage() {
  return (
    <Page>
      <div className="page-component">
        <h1 className="page-component__title"> Button </h1>

        <hr />

        <div className="page-component__content">
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
    </Page>
  )
}
