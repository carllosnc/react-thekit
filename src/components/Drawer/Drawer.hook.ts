import { useState } from 'react'

type useDrawerReturn = [boolean, () => void, () => void]

export function useDrawer(): useDrawerReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openDrawer() {
    setIsOpen(s => true)
  }

  function closeDrawer() {
    setIsOpen(s => false)
  }

  return [isOpen, openDrawer, closeDrawer]
}
