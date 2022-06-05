import {
  render,
  renderHook,
  act,
  waitFor,
  screen,
} from '@testing-library/react'
import { Modal } from './Modal'
import { useModal } from './Modal.hook'

describe('<Modal /> component', () => {
  test('check initial render', () => {
    const { result } = renderHook(() => useModal())
    const [modal, openModal, closeModal] = result.current

    render(
      <Modal isOpen={modal} onClose={closeModal}>
        <p> modal content </p>
      </Modal>
    )

    expect(screen.getByTestId('modal')).toBeInTheDocument()
    expect(screen.getByTestId('modal')).not.toBeVisible()

    expect(screen.getByTestId('modal-container')).toBeInTheDocument()
    expect(screen.getByTestId('modal-container')).not.toBeVisible()

    expect(screen.getByTestId('modal-content')).toBeInTheDocument()
    expect(screen.getByTestId('modal-content')).not.toBeVisible()

    expect(screen.getByTestId('modal-close')).toBeInTheDocument()
    expect(screen.getByTestId('modal-close')).not.toBeVisible()
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

    render(
      <Modal isOpen={result.current[0]} onClose={result.current[2]}>
        <p data-testid="content"> modal content </p>
      </Modal>
    )

    expect(result.current[0]).toBe(true)

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal-container')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal-container')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal-content')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal-content')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('content')).toHaveTextContent('modal content')
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal-close')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('modal-close')).toBeVisible()
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
