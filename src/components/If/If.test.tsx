import { render } from '@testing-library/react'
import { If, Else } from '../If/If'

describe('<If /> Component', () => {
  test('check true condition', () => {
    const { getByTestId } = render(
      <If condition={true}>
        <span data-testid="true-condition"> true condition </span>
      </If>
    )

    expect(getByTestId('true-condition')).toBeInTheDocument()
    expect(getByTestId('true-condition')).toBeVisible()
    expect(getByTestId('true-condition')).toHaveTextContent('true condition')
  })

  test('check false condition', () => {
    const { queryByTestId } = render(
      <If condition={false}>
        <span data-testid="false-condition"> false condition </span>
      </If>
    )

    expect(queryByTestId('false-condition')).toBeFalsy()
  })

  test('check true condition with <Else />', () => {
    const { queryByTestId, getByTestId } = render(
      <If condition={true}>
        <span data-testid="true-condition"> true condition </span>

        <Else>
          <span data-testid="false-condition"> false condition </span>
        </Else>
      </If>
    )

    expect(getByTestId('true-condition')).toBeInTheDocument()
    expect(queryByTestId('false-condition')).toBeFalsy()
  })

  test('check false condition with <Else />', () => {
    const { queryByTestId, getByTestId } = render(
      <If condition={false}>
        <span data-testid="true-condition"> true condition </span>

        <Else>
          <span data-testid="false-condition"> false condition </span>
        </Else>
      </If>
    )

    expect(getByTestId('false-condition')).toBeInTheDocument()
    expect(queryByTestId('true-condition')).toBeFalsy()
  })
})
