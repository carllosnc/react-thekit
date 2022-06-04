import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Expander } from './Expander'

describe('<Expander /> component', () => {
  test('check initial render', () => {
    const { getByTestId } = render(
      <Expander title="expander title"> expander content </Expander>
    )

    expect(getByTestId('expander')).toBeInTheDocument()
    expect(getByTestId('expander')).toBeVisible()

    expect(getByTestId('expander-title')).toBeInTheDocument()
    expect(getByTestId('expander-title')).toBeVisible()
    expect(getByTestId('expander-title')).toHaveTextContent('expander title')

    expect(getByTestId('expander-arrow')).toBeInTheDocument()
    expect(getByTestId('expander-arrow')).toBeVisible()

    expect(getByTestId('expander-container')).toBeInTheDocument()
    expect(getByTestId('expander-container')).not.toBeVisible()

    expect(getByTestId('expander-content')).toBeInTheDocument()
    expect(getByTestId('expander-container')).not.toBeVisible()
    expect(getByTestId('expander-content')).toHaveTextContent(
      'expander content'
    )
  })

  test('check interaction with click event', async () => {
    const { getByTestId } = render(
      <Expander title="expander title"> expander content </Expander>
    )

    fireEvent.click(getByTestId('expander-title'))

    await waitFor(() => {
      expect(getByTestId('expander-container')).toBeVisible()
      expect(getByTestId('expander-content')).toBeVisible()
    })
  })
})
