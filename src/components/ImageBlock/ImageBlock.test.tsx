import { render, screen } from '@testing-library/react'
import { ImageBlock } from './ImageBlock'

describe('<BlockImage /> component', () => {
  test('check initial render', () => {
    render(
      <ImageBlock
        width={300}
        height={200}
        bgColor="#E7204D"
        src="https://images.unsplash.com/photo-1668442818706-fa6a47daa245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
      />
    )

    expect(screen.getByTestId('image-block-wrapper')).toBeInTheDocument()
    expect(screen.getByTestId('image-block-wrapper')).toBeVisible()

    expect(screen.getByTestId('image-block-source')).toBeInTheDocument()
    expect(screen.getByTestId('image-block-source')).toBeVisible()

    expect(screen.getByTestId('image-block-backdrop')).toBeInTheDocument()
    expect(screen.getByTestId('image-block-backdrop')).toBeVisible()
  })

  test('show thrown an erro when {src} is not assigned', () => {
    const consoleErrorFn = jest
      .spyOn(console, 'error')
      .mockImplementation(() => jest.fn())

    try {
      render(<ImageBlock width={300} height={200} bgColor="#E7204D" />)
    } catch (error) {
      expect(error.message).toBe('<BlockImage/>: { src } property is required')
    }

    consoleErrorFn.mockRestore()
  })
})
