import 'intersection-observer'
import { render, waitFor, screen } from '@testing-library/react'
import { Reveal } from './Reveal'

describe('<Reveal /> component', () => {
  test('check initial render', async () => {
    render(
      <Reveal>
        <p data-testid="first-item"> first item </p>
        <p data-testid="second-item"> second item </p>
        <p data-testid="third-item"> third item </p>
      </Reveal>,
    )

    expect(screen.getByTestId('reveal')).toBeInTheDocument()
    expect(screen.getByTestId('reveal')).not.toBeVisible()

    expect(screen.getByTestId('first-item')).toBeInTheDocument()
    expect(screen.getByTestId('first-item')).not.toBeVisible()

    expect(screen.getByTestId('second-item')).toBeInTheDocument()
    expect(screen.getByTestId('second-item')).not.toBeVisible()

    expect(screen.getByTestId('third-item')).toBeInTheDocument()
    expect(screen.getByTestId('third-item')).not.toBeVisible()

    await waitFor(() => {
      expect(screen.getByTestId('reveal')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('first-item')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('second-item')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('third-item')).toBeVisible()
    })
  })
})
