import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { ImageExpander } from './ImageExpander'
import Image from 'next/image'

const image =
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2568&q=80'

describe('<ImageExpande /> component', () => {
  test('check initial render', () => {
    const { getByTestId } = render(
      <ImageExpander
        thumb={
          <Image
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={image}
            alt="image"
            objectFit="cover"
            objectPosition="center"
            src={image}
          />
        }
        full={
          <Image
            alt="image"
            objectFit="cover"
            src={image}
            placeholder="blur"
            blurDataURL={image}
            width={500}
            height={500}
          />
        }
      ></ImageExpander>
    )

    expect(getByTestId('image-expander')).toBeInTheDocument()
    expect(getByTestId('image-expander')).toBeVisible()

    expect(getByTestId('image-expander-overlay')).toBeInTheDocument()
    expect(getByTestId('image-expander-overlay')).not.toBeVisible()

    expect(getByTestId('image-expander-content')).toBeInTheDocument()
    expect(getByTestId('image-expander-content')).not.toBeVisible()

    expect(getByTestId('image-expander-figure')).toBeInTheDocument()
    expect(getByTestId('image-expander-figure')).not.toBeVisible()

    expect(getByTestId('image-expander-reference')).toBeInTheDocument()
  })

  test('check click event', async () => {
    const { getByTestId } = render(
      <ImageExpander
        thumb={
          <Image
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={image}
            alt="image"
            objectFit="cover"
            objectPosition="center"
            src={image}
          />
        }
        full={
          <Image
            alt="image"
            objectFit="cover"
            src={image}
            placeholder="blur"
            blurDataURL={image}
            width={500}
            height={500}
          />
        }
      ></ImageExpander>
    )

    fireEvent.click(getByTestId('image-expander'))

    await waitFor(() => {
      expect(getByTestId('image-expander')).toBeVisible()
      expect(getByTestId('image-expander-overlay')).toBeVisible()
      expect(getByTestId('image-expander-content')).toBeVisible()
      expect(getByTestId('image-expander-figure')).toBeVisible()
    })
  })
})
