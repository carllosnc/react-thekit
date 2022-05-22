import { Page } from '@/templates'
import Link from 'next/link'
import {
  RiCheckboxBlankFill,
  RiCheckboxFill,
  RiArrowDownFill,
  RiImage2Fill,
  RiPencilFill,
  RiPictureInPictureFill,
  RiLayout5Line,
  RiRecordCircleLine,
  RiPictureInPictureExitFill,
  RiArrowDownSLine,
  RiCodeView,
  RiLayoutMasonryFill,
} from 'react-icons/ri'

export default function Home() {
  return (
    <Page>
      <div className="index">
        <h1 className="index__title"> thekit </h1>

        <p className="index__description"> Some useful react components </p>

        <div className="index__menu">
          <Link href="/button">
            <a className="index__item">
              <RiCheckboxBlankFill className="index__item__icon" />
              Button
            </a>
          </Link>

          <Link href="/carousel">
            <a className="index__item">
              <RiLayoutMasonryFill className="index__item__icon" />
              Carousel
            </a>
          </Link>

          <Link href="/checkbox">
            <a className="index__item">
              <RiCheckboxFill className="index__item__icon" />
              Checkbox
            </a>
          </Link>

          <Link href="/expander">
            <a className="index__item">
              <RiArrowDownFill className="index__item__icon" />
              Expander
            </a>
          </Link>

          <Link href="/image-expander">
            <a className="index__item">
              <RiImage2Fill className="index__item__icon" />
              Image expander
            </a>
          </Link>

          <Link href="/input">
            <a className="index__item">
              <RiPencilFill className="index__item__icon" />
              Input
            </a>
          </Link>

          <Link href="/modal">
            <a className="index__item">
              <RiPictureInPictureFill className="index__item__icon" />
              Modal
            </a>
          </Link>

          <Link href="/navbar">
            <a className="index__item">
              <RiLayout5Line className="index__item__icon" />
              Navbar
            </a>
          </Link>

          <Link href="/radio">
            <a className="index__item">
              <RiRecordCircleLine className="index__item__icon" />
              Radio
            </a>
          </Link>

          <Link href="/reveal">
            <a className="index__item">
              <RiPictureInPictureExitFill className="index__item__icon" />
              Reveal
            </a>
          </Link>

          <Link href="/select">
            <a className="index__item">
              <RiArrowDownSLine className="index__item__icon" />
              Select
            </a>
          </Link>

          <Link href="/syntax">
            <a className="index__item">
              <RiCodeView className="index__item__icon" />
              Syntax
            </a>
          </Link>
        </div>
      </div>
    </Page>
  )
}
