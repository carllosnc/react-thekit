import {
  render,
  renderHook,
  act,
  waitFor,
  screen,
} from '@testing-library/react'
import { Drawer } from './Drawer'
import { useDrawer } from './Drawer.hook'

describe('<Drawer /> component', () => {
  test('check initial render', () => {
    const { result } = renderHook(() => useDrawer())
    const [drawer, openDrawer, closeDrawer] = result.current

    render(
      <Drawer isOpen={drawer} onClose={closeDrawer}>
        <p> modal content </p>
      </Drawer>
    )

    expect(screen.getByTestId('drawer')).toBeInTheDocument()
    expect(screen.getByTestId('drawer')).not.toBeVisible()

    expect(screen.getByTestId('drawer-container')).toBeInTheDocument()
    expect(screen.getByTestId('drawer-container')).not.toBeVisible()

    expect(screen.getByTestId('drawer-content')).toBeInTheDocument()
    expect(screen.getByTestId('drawer-content')).not.toBeVisible()

    expect(screen.getByTestId('drawer-close')).toBeInTheDocument()
    expect(screen.getByTestId('drawer-close')).not.toBeVisible()
  })

  test('check initial useDrawer state', () => {
    const { result } = renderHook(() => useDrawer())
    const [drawer] = result.current

    expect(drawer).toBe(false)
  })

  test('check to open drawer', async () => {
    const { result } = renderHook(() => useDrawer())

    act(() => {
      result.current[1]()
    })

    render(
      <Drawer isOpen={result.current[0]} onClose={result.current[2]}>
        <p data-testid="content"> drawer content </p>
      </Drawer>
    )

    expect(result.current[0]).toBe(true)

    await waitFor(() => {
      expect(screen.getByTestId('drawer')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-container')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-container')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-content')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-content')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-content')).toHaveTextContent(
        'drawer content'
      )
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-close')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByTestId('drawer-close')).toBeVisible()
    })
  })

  test('check useDrawer to open and close', () => {
    const { result } = renderHook(() => useDrawer())

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
