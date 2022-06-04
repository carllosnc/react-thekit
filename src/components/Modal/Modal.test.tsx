import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { Modal } from './Modal'
import { useModal } from './Modal.hook'
import { renderHook, act } from '@testing-library/react-hooks'

describe('<Modal /> component', () => {
  test('check initial render', () => {
    const { result } = renderHook(() => useModal())
    const [modal, openModal, closeModal] = result.current

    const { getByTestId } = render(
      <Modal isOpen={modal} onClose={closeModal}>
        <p> modal content </p>
      </Modal>
    )

    expect(getByTestId('modal')).toBeInTheDocument()
    expect(getByTestId('modal')).not.toBeVisible()

    expect(getByTestId('modal-container')).toBeInTheDocument()
    expect(getByTestId('modal-container')).not.toBeVisible()

    expect(getByTestId('modal-content')).toBeInTheDocument()
    expect(getByTestId('modal-content')).not.toBeVisible()

    expect(getByTestId('modal-close')).toBeInTheDocument()
    expect(getByTestId('modal-close')).not.toBeVisible()
  })

  test('check initial useModal state', () => {
    const { result } = renderHook(() => useModal())
    const [modal] = result.current

    expect(modal).toBe(false)
  })

  test('check to open modal', async () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current[1]()
    })

    const { getByTestId } = render(
      <Modal isOpen={result.current[0]} onClose={result.current[2]}>
        <p data-testid="content"> modal content </p>
      </Modal>
    )

    expect(result.current[0]).toBe(true)

    await waitFor(() => {
      expect(getByTestId('modal')).toBeInTheDocument()
      expect(getByTestId('modal')).toBeVisible()

      expect(getByTestId('modal-container')).toBeInTheDocument()
      expect(getByTestId('modal-container')).toBeVisible()

      expect(getByTestId('modal-content')).toBeInTheDocument()
      expect(getByTestId('modal-content')).toBeVisible()
      expect(getByTestId('content')).toHaveTextContent('modal content')

      expect(getByTestId('modal-close')).toBeInTheDocument()
      expect(getByTestId('modal-close')).toBeVisible()
    })
  })

  test('check useModal to open and close', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[2]()
    })

    expect(result.current[0]).toBe(false)
  })
})
