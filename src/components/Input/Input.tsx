import { ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { FiCheck } from 'react-icons/fi'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorMessage?: string
  success?: boolean
  icon?: ReactElement<IconType>
  description?: string
}

export function Input({
  label,
  error = false,
  errorMessage,
  icon,
  success,
  description,
  ...props
}: InputProps) {
  const errorClass = error ? 'input__content--error' : ''

  return (
    <label data-testid="input" className="input">
      <div data-testid="input-info" className="input__info">
        {label && (
          <p data-testid="input-label" className="input__label">
            {label}
          </p>
        )}
        {errorMessage && (
          <p data-testid="input-error-message" className="input__error-message">
            - {errorMessage}
          </p>
        )}
      </div>

      <div
        data-testid="input-content"
        className={`input__content ${errorClass}`}
      >
        {icon && (
          <span data-testid="input-icon" className="input__icon">
            {icon}
          </span>
        )}
        <input data-testid="input-field" className="input__field" {...props} />
        {success && (
          <span data-testid="input-success" className="input__success">
            <FiCheck />
          </span>
        )}
      </div>

      {description && (
        <p data-testid="input-description" className="input__description">
          {description}
        </p>
      )}
    </label>
  )
}
