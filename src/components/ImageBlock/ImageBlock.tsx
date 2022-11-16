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
      <img
        data-testid="image-block-source"
        className={`absolute w-full ${props.className}`}
        alt={props.alt}
        {...props}
      />
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
