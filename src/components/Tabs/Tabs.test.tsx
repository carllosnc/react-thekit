import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs, Tab } from './Tabs'

describe('<Tabs />', () => {
  function renderComponent() {
    render(
      <Tabs labels={['tab0', 'tab1', 'tab2']}>
        <Tab>
          <div> tab-content-0 </div>
        </Tab>

        <Tab>
          <div> tab-content-1 </div>
        </Tab>

        <Tab>
          <div> tab-content-2 </div>
        </Tab>
      </Tabs>,
    )
  }

  test('check initial render', () => {
    renderComponent()

    expect(screen.getByTestId('tabs')).toBeInTheDocument()
    expect(screen.getByTestId('tabs')).toBeVisible()

    expect(screen.getByTestId('tabs-header')).toBeInTheDocument()
    expect(screen.getByTestId('tabs-header')).toBeVisible()

    expect(screen.queryAllByTestId('tabs-button').length).toBe(3)
    expect(screen.queryAllByTestId('tabs-item').length).toBe(3)

    expect(screen.getByText('tab0')).toBeInTheDocument()
    expect(screen.getByText('tab1')).toBeInTheDocument()
    expect(screen.getByText('tab2')).toBeInTheDocument()

    expect(screen.getByText('tab-content-0')).toBeInTheDocument()
  })

  test('check tabs switching', () => {
    renderComponent()

    fireEvent.click(screen.queryAllByTestId('tabs-item')[0])
    expect(screen.getByText('tab-content-0')).toBeInTheDocument()

    fireEvent.click(screen.queryAllByTestId('tabs-item')[1])
    expect(screen.getByText('tab-content-1')).toBeInTheDocument()

    fireEvent.click(screen.queryAllByTestId('tabs-item')[2])
    expect(screen.getByText('tab-content-2')).toBeInTheDocument()
  })
})
