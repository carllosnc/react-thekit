import { useState } from 'react'
import { RadioValue } from './Radio'

type useRadioReturn = [any, (value: any) => void]

export function useRadio(defaultValue: any = null): useRadioReturn {
  const [selected, setSelected] = useState<any>(defaultValue)

  function changeHandle(value: RadioValue) {
    setSelected((c: any) => value)
  }

  return [selected, changeHandle]
}
