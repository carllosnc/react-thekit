import { DocPage } from '@/templates'
import { Carousel } from '@/components'

function MyImage({ src }: any) {
  return (
    <img
      className="w-full h-[400px] md:h-[250px] object-cover object-center"
      src={src}
      alt="image"
    />
  )
}

export default function CarouselPage({ doc }) {
  return (
    <DocPage title="Carousel" markdown={doc}>
      <Carousel
        dots
        items={[
          <MyImage
            key={111}
            src="https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/02_zxxfjf.webp"
          />,

          <MyImage
            key={222}
            src="https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/05_gm0bmx.webp"
          />,

          <MyImage
            key={333}
            src="https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/04_hnipyy.webp"
          />,

          <MyImage
            key={333}
            src="https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/03_vw6qtt.webp"
          />,
        ]}
      />
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Carousel/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
