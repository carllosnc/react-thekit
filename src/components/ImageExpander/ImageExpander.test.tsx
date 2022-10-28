import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { ImageExpander } from './ImageExpander'
import Image from 'next/image'

const image =
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2568&q=80'

describe('<ImageExpande /> component', () => {
  test('check initial render', () => {
    render(
      <ImageExpander
        thumb={
          <Image
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={image}
            alt="image"
            src={image}
          />
        }
        full={
          <Image
            alt="image"
            src={image}
            placeholder="blur"
            blurDataURL={image}
            width={500}
            height={500}
          />
        }
      ></ImageExpander>
    )

    expect(screen.getByTestId('image-expander')).toBeInTheDocument()
    expect(screen.getByTestId('image-expander')).toBeVisible()

    expect(screen.getByTestId('image-expander-overlay')).toBeInTheDocument()
    expect(screen.getByTestId('image-expander-overlay')).not.toBeVisible()

    expect(screen.getByTestId('image-expander-content')).toBeInTheDocument()
    expect(screen.getByTestId('image-expander-content')).not.toBeVisible()

    expect(screen.getByTestId('image-expander-figure')).toBeInTheDocument()
    expect(screen.getByTestId('image-expander-figure')).not.toBeVisible()

    expect(screen.getByTestId('image-expander-reference')).toBeInTheDocument()
  })

  test('check click event', async () => {
    render(
      <ImageExpander
        thumb={
          <Image
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={image}
            alt="image"
            src={image}
          />
        }
        full={
          <Image
            alt="image"
            src={image}
            placeholder="blur"
            blurDataURL={image}
            width={500}
            height={500}
          />
        }
      ></ImageExpander>
    )

    fireEvent.click(screen.getByTestId('image-expander'))

    await waitFor(() => {
      expect(screen.getByTestId('image-expander')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('image-expander-overlay')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('image-expander-content')).toBeVisible()
    })

    await waitFor(() => {
      expect(screen.getByTestId('image-expander-figure')).toBeVisible()
    })
  })
})
