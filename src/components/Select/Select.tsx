import { forwardRef } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export type SelectItem = {
  name: string
  value: string | number
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: SelectItem[]
  placeholder?: string
  label?: string
  error?: boolean
  errorMessage?: string
}

const Select = forwardRef(
  (
    { placeholder, items, label, error, errorMessage, ...props }: SelectProps,
    ref: React.Ref<HTMLSelectElement>,
  ) => {
    const errorClass = error ? 'select__field--error' : ''

    return (
      <div data-testid="select" className="select">
        <div data-testid="select-info" className="select__info">
          {label && (
            <p data-testid="select-label" className="select__label">
              {label}
            </p>
          )}
          {errorMessage && (
            <p
              data-testid="select-error-message"
              className="select__error-message"
            >
              - {errorMessage}
            </p>
          )}
        </div>

        <div data-testid="select-content" className="select__content">
          <select
            {...props}
            className={`select__field ${errorClass}`}
            ref={ref}
          >
            {placeholder && (
              <option data-testid="select-placeholder" hidden value="">
                {placeholder}
              </option>
            )}

            {items.map((item: SelectItem, index: number) => {
              return (
                <option
                  data-testid="select-option"
                  key={index + item.name}
                  className="select__option"
                  value={item.value}
                >
                  {item.name}
                </option>
              )
            })}
          </select>

          <FiChevronDown data-testid="select-arrow" className="select__arrow" />
        </div>
      </div>
    )
  },
)

Select.displayName = 'Select'
export { Select }
