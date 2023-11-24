import { render, screen } from '@testing-library/react'
import { Selectable, SelectableItem } from './Selectable'

describe('<Selectable /> component', () => {
  test('check initial render', () => {
    render(
      <Selectable
        start={1}
        onSelect={data => {
          //
        }}
      >
        <SelectableItem data={'foo'}>
          <p> Foo </p>
        </SelectableItem>

        <SelectableItem data={'bar'}>
          <p> Bar </p>
        </SelectableItem>

        <SelectableItem data={'span'}>
          <p> Span </p>
        </SelectableItem>
      </Selectable>,
    )

    expect(screen.getByTestId('selectable')).toBeInTheDocument()
    expect(screen.getByTestId('selectable')).toBeVisible()

    expect(screen.getAllByTestId('selectable-item').length).toBe(3)

    expect(screen.getByTestId('selectable-mark')).toBeInTheDocument()
    expect(screen.getByTestId('selectable-mark')).toBeVisible()
  })
})
