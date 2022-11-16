import { ImageBlock } from '@/components'
import { DocPage } from '@/templates'

export default function VideoBackgroundPage({ doc }) {
  return (
    <DocPage title="Image Block" markdown={doc}>
      <div className="grid grid-cols-2 gap-1">
        <ImageBlock
          width={300}
          height={200}
          bgColor="#E7204D"
          src="https://images.unsplash.com/photo-1668442818706-fa6a47daa245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
        />

        <ImageBlock
          width={300}
          height={200}
          bgColor="#E7204D"
          src="https://images.unsplash.com/photo-1668468232841-0b5b45ab758f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
        />

        <ImageBlock
          width={300}
          height={200}
          bgColor="#E7204D"
          src="https://images.unsplash.com/photo-1664209040613-85b354fcfe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
        />

        <ImageBlock
          width={300}
          height={200}
          bgColor="#E7204D"
          src="https://images.unsplash.com/photo-1664209040664-1223feb3d25e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
        />

        <ImageBlock
          width={300}
          height={200}
          bgColor="#E7204D"
          src="https://images.unsplash.com/photo-1668475314128-77e400108c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
        />

        <ImageBlock
          width={300}
          height={200}
          bgColor="#E7204D"
          src="https://images.unsplash.com/photo-1668177706281-3c7f9e0153df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=100"
        />
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/ImageBlock/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
