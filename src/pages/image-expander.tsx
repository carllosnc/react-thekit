import { DocPage } from '@/templates'
import { ImageExpander } from '@/components'
import Image from 'next/image'
import { key } from '@/utils'

export default function ImageExpanderPage({ doc }) {
  const images = [
    {
      src: 'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/02_zxxfjf.webp',
      width: 793,
      height: 596,
    },

    {
      src: 'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/05_gm0bmx.webp',
      width: 793,
      height: 1059,
    },

    {
      src: 'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/04_hnipyy.webp',
      width: 792,
      height: 1060,
    },

    {
      src: 'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/03_vw6qtt.webp',
      width: 794,
      height: 530,
    },

    {
      src: 'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/01_kmi288.webp',
      width: 794,
      height: 597,
    },

    {
      src: 'https://res.cloudinary.com/c4co/image/upload/v1655204172/thekit/images/06_c1cu6c.webp',
      width: 794,
      height: 530,
    },
  ]

  return (
    <DocPage title="Image Expander" markdown={doc}>
      <div className="grid grid-cols-3">
        {images.map((item, index) => {
          return (
            <ImageExpander
              key={key()}
              thumb={
                <Image
                  width={270}
                  height={270}
                  placeholder="blur"
                  blurDataURL={item.src}
                  alt="image"
                  objectFit="cover"
                  src={item.src}
                />
              }
              full={
                <Image
                  alt="image"
                  objectFit="cover"
                  src={item.src}
                  placeholder="blur"
                  blurDataURL={item.src}
                  width={item.width}
                  height={item.height}
                />
              }
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
