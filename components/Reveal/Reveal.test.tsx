import 'intersection-observer'
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { Reveal } from './Reveal'

describe('<Reveal /> component', () => {
  test('check initial render', async () => {
    const { getByTestId } = render(
      <Reveal>
        <p data-testid="first-item"> first item </p>
        <p data-testid="second-item"> second item </p>
        <p data-testid="third-item"> third item </p>
      </Reveal>
    )

    expect(getByTestId('reveal')).toBeInTheDocument()
    expect(getByTestId('reveal')).not.toBeVisible()

    expect(getByTestId('first-item')).toBeInTheDocument()
    expect(getByTestId('first-item')).not.toBeVisible()

    expect(getByTestId('second-item')).toBeInTheDocument()
    expect(getByTestId('second-item')).not.toBeVisible()

    expect(getByTestId('third-item')).toBeInTheDocument()
    expect(getByTestId('third-item')).not.toBeVisible()

    await waitFor(() => {
      expect(getByTestId('reveal')).toBeVisible()
      expect(getByTestId('first-item')).toBeVisible()
      expect(getByTestId('second-item')).toBeVisible()
      expect(getByTestId('third-item')).toBeVisible()
    })
  })
})
