import { useState } from 'react'

type useModalReturn = [boolean, () => void, () => void]

export function useModal(): useModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openModal() {
    setIsOpen(s => true)
  }

  function closeModal() {
    setIsOpen(s => false)
  }

  return [isOpen, openModal, closeModal]
}
