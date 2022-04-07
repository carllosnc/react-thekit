import { useEffect, useState } from 'react'

type useCheckboxReturn = [boolean, () => void]

export function useCheckbox(defaultValue: boolean = false): useCheckboxReturn {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue)

  function toggleCheck() {
    setIsChecked(s => !s)
  }

  return [isChecked, toggleCheck]
}
