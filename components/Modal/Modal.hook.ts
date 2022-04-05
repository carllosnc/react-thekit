import { useState } from 'react'

export function useModal(): [boolean, () => void, () => void]{
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openModal(){
    setIsOpen(s => true)
  }

  function closeModal(){
    setIsOpen(s => false)
  }

  return [
    isOpen,
    openModal,
    closeModal
  ]
}
