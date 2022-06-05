import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Expander } from './Expander'

describe('<Expander /> component', () => {
  test('check initial render', () => {
    render(<Expander title="expander title"> expander content </Expander>)

    expect(screen.getByTestId('expander')).toBeInTheDocument()
    expect(screen.getByTestId('expander')).toBeVisible()

    expect(screen.getByTestId('expander-title')).toBeInTheDocument()
    expect(screen.getByTestId('expander-title')).toBeVisible()
    expect(screen.getByTestId('expander-title')).toHaveTextContent(
      'expander title'
    )

    expect(screen.getByTestId('expander-arrow')).toBeInTheDocument()
    expect(screen.getByTestId('expander-arrow')).toBeVisible()

    expect(screen.getByTestId('expander-container')).toBeInTheDocument()
    expect(screen.getByTestId('expander-container')).not.toBeVisible()

    expect(screen.getByTestId('expander-content')).toBeInTheDocument()
    expect(screen.getByTestId('expander-container')).not.toBeVisible()
    expect(screen.getByTestId('expander-content')).toHaveTextContent(
      'expander content'
    )
  })

  test('check interaction with click event', async () => {
    render(<Expander title="expander title"> expander content </Expander>)

    fireEvent.click(screen.getByTestId('expander-title'))

    await waitFor(() => {
      expect(screen.getByTestId('expander-container')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('expander-content')).toBeVisible()
    })
  })
})
