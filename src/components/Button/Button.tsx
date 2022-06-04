import { ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean | string
  leftIcon?: ReactElement<IconType>
  rightIcon?: ReactElement<IconType>
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  isLoading = false,
  ...props
}: ButtonProps) {
  if (isLoading) {
    return (
      <button
        data-testid="button-loading"
        className="button button--loading"
        disabled={true}
      >
        {(isLoading as string).length ? isLoading : children}
      </button>
    )
  }

  return (
    <button data-testid="button" className="button" {...props}>
      {leftIcon && (
        <span data-testid="button-icon-left" className="button__icon">
          {leftIcon}
        </span>
      )}

      {children}

      {rightIcon && (
        <span data-testid="button-icon-right" className="button__icon">
          {rightIcon}
        </span>
      )}
    </button>
  )
}
