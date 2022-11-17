import LazyLoad from 'react-lazy-load'

interface ImageBlockProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  bgColor: string
}

export function ImageBlock({ bgColor, ...props }: ImageBlockProps) {
  if (!props.src) {
    throw new Error('<BlockImage/>: { src } property is required')
  }

  return (
    <div
      data-testid="image-block-wrapper"
      className="relative overflow-hidden flex items-center"
    >
      <LazyLoad className="absolute z-10 w-full" offset={300}>
        <img
          data-testid="image-block-source"
          className={`w-full ${props.className}`}
          alt={props.alt}
          {...props}
        />
      </LazyLoad>

      <svg
        data-testid="image-block-backdrop"
        viewBox={`0 0 ${props.width} ${props.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={props.width} height={props.height} fill={bgColor} />
      </svg>
    </div>
  )
}
