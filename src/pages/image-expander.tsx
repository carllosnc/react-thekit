import { DocPage } from '@/templates'
import { ImageExpander } from '@/components'
import { key } from '@/utils'

export default function ImageExpanderPage({ doc }) {
  const images = [
    'https://images.unsplash.com/photo-1712371962783-62c7f951951f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1717869885094-4a6f55df8154?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1717416702141-9e9ac08708e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1717361275129-76ec3c9668d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1717903778360-761a154e6f6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1717948513890-319c7fcb1fcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D',
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
