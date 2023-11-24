import { render, screen } from '@testing-library/react'
import { If, Else } from '../If/If'

describe('<If /> Component', () => {
  test('check true condition', () => {
    render(
      <If condition={true}>
        <span data-testid="true-condition"> true condition </span>
      </If>,
    )

    expect(screen.getByTestId('true-condition')).toBeInTheDocument()
    expect(screen.getByTestId('true-condition')).toBeVisible()
    expect(screen.getByTestId('true-condition')).toHaveTextContent(
      'true condition',
    )
  })

  test('check false condition', () => {
    const { queryByTestId } = render(
      <If condition={false}>
        <span data-testid="false-condition"> false condition </span>
      </If>,
    )

    expect(screen.queryByTestId('false-condition')).toBeFalsy()
  })

  test('check true condition with <Else />', () => {
    render(
      <If condition={true}>
        <span data-testid="true-condition"> true condition </span>

        <Else>
          <span data-testid="false-condition"> false condition </span>
        </Else>
      </If>,
    )

    expect(screen.getByTestId('true-condition')).toBeInTheDocument()
    expect(screen.queryByTestId('false-condition')).toBeFalsy()
  })

  test('check false condition with <Else />', () => {
    render(
      <If condition={false}>
        <span data-testid="true-condition"> true condition </span>

        <Else>
          <span data-testid="false-condition"> false condition </span>
        </Else>
      </If>,
    )

    expect(screen.getByTestId('false-condition')).toBeInTheDocument()
    expect(screen.queryByTestId('true-condition')).toBeFalsy()
  })
})
