import { DocPage } from '@/templates'
import { Button } from '@/components'
import { MdStar, MdHeadset } from 'react-icons/md'

export default function ButtonPage({ doc }) {
  return (
    <DocPage title="Buttons" markdown={doc}>
      <div className="flex gap-4 flex-wrap">
        <Button leftIcon={<MdStar />}>Button</Button>
        <Button rightIcon={<MdHeadset />}>Button</Button>
        <Button leftIcon={<MdStar />} rightIcon={<MdHeadset />}>
          Button
        </Button>
        <Button isLoading="Carregando...">Button</Button>
        <Button isLoading="Loading...">Button</Button>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Button/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
