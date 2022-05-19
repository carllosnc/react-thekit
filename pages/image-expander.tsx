import { Page } from '@/templates'
import { ImageExpander } from '@/components'
import Image from 'next/image'
import { key } from '@/utils'

export default function ImageExpanderPage() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2568&q=80',
      width: 700,
      height: 1000,
    },
    {
      src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      width: 600,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      width: 800,
      height: 500,
    },
    {
      src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      width: 600,
      height: 600,
    },

    {
      src: 'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      width: 600,
      height: 400,
    },

    {
      src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      width: 600,
      height: 600,
    },
  ]

  return (
    <Page>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Image expander </h1>

          <hr />

          <p> Live example </p>

          <div className="grid grid-cols-3 gap-2">
            {images.map((item, index) => {
              return (
                <ImageExpander
                  key={key()}
                  thumb={
                    <Image
                      width={230}
                      height={260}
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
        </div>
      </div>
    </Page>
  )
}
