import { FiChevronDown } from 'react-icons/fi'

export type SelectItem = {
  name: string
  value: string | number
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: SelectItem[]
  placeholder?: string
  label?: string
}

export function Select({ placeholder, items, label, ...props }: SelectProps) {
  return (
    <div data-testid="select" className="select">
      {label && (
        <span data-testid="select-label" className="select__label">
          {label}
        </span>
      )}
      <div data-testid="select-content" className="select__content">
        <select {...props} className="select__field">
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
}
