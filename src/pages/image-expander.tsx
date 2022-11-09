import { DocPage } from '@/templates'
import { ImageExpander } from '@/components'
import { key } from '@/utils'

export default function ImageExpanderPage({ doc }) {
  const images = [
    'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/02_zxxfjf.webp',
    'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/05_gm0bmx.webp',
    'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/04_hnipyy.webp',
    'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/03_vw6qtt.webp',
    'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/01_kmi288.webp',
    'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/06_c1cu6c.webp',
  ]

  return (
    <DocPage title="Image Expander" markdown={doc}>
      <div className="grid grid-cols-3">
        {images.map(item => {
          return (
            <ImageExpander
              key={key()}
              thumb={
                <img
                  className="object-cover h-[200px] w-full sm:h-[100px]"
                  alt="image"
                  src={item}
                />
              }
              full={<img alt="image" src={item} />}
            ></ImageExpander>
          )
        })}
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/ImageExpander/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
