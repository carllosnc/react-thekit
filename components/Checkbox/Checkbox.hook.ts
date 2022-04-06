import { useState } from 'react'

type useCheckboxReturn = [boolean, () => void]

export function useCheckbox(defaultValue: boolean = false): useCheckboxReturn {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue)

  function toggleCheck() {
    setIsChecked(!isChecked)
  }

  return [isChecked, toggleCheck]
}
