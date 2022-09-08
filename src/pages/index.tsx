import { Page } from '@/templates'
import Link from 'next/link'

import {
  TbRectangle,
  TbSlideshow,
  TbSelect,
  TbCheckbox,
  TbLayoutNavbar,
  TbCircleDot,
  TbArrowBigUpLines,
  TbBallpen,
  TbArrowBarDown,
  TbBoxMultiple,
  TbCode,
  TbPictureInPictureOff,
  TbVideo,
  TbQuestionMark,
  TbAppWindow,
  TbLayoutSidebar,
  TbTable,
  TbHandFinger,
} from 'react-icons/tb'

export default function Home() {
  return (
    <Page>
      <div className="index">
        <header className="index__header">
          <h1 className="index__title"> thekit </h1>
          <p className="index__description"> Some useful react components </p>
        </header>

        <div className="index__menu">
          <Link href="/button">
            <a className="index__item">
              <TbRectangle className="index__item__icon" />
              Button
            </a>
          </Link>

          <Link href="/carousel">
            <a className="index__item">
              <TbSlideshow className="index__item__icon" />
              Carousel
            </a>
          </Link>

          <Link href="/checkbox">
            <a className="index__item">
              <TbCheckbox className="index__item__icon" />
              Checkbox
            </a>
          </Link>

          <Link href="/drawer">
            <a className="index__item">
              <TbLayoutSidebar className="index__item__icon" />
              Drawer
            </a>
          </Link>

          <Link href="/expander">
            <a className="index__item">
              <TbArrowBarDown className="index__item__icon" />
              Expander
            </a>
          </Link>

          <Link href="/if">
            <a className="index__item">
              <TbQuestionMark className="index__item__icon" />
              If (condition)
            </a>
          </Link>

          <Link href="/image-expander">
            <a className="index__item">
              <TbPictureInPictureOff className="index__item__icon" />
              Image expander
            </a>
          </Link>

          <Link href="/input">
            <a className="index__item">
              <TbBallpen className="index__item__icon" />
              Input
            </a>
          </Link>

          <Link href="/modal">
            <a className="index__item">
              <TbBoxMultiple className="index__item__icon" />
              Modal
            </a>
          </Link>

          <Link href="/navbar">
            <a className="index__item">
              <TbLayoutNavbar className="index__item__icon" />
              Navbar
            </a>
          </Link>

          <Link href="/radio">
            <a className="index__item">
              <TbCircleDot className="index__item__icon" />
              Radio
            </a>
          </Link>

          <Link href="/regular-table">
            <a className="index__item">
              <TbTable className="index__item__icon" />
              Regular Table
            </a>
          </Link>

          <Link href="/reveal">
            <a className="index__item">
              <TbArrowBigUpLines className="index__item__icon" />
              Reveal
            </a>
          </Link>

          <Link href="/select">
            <a className="index__item">
              <TbSelect className="index__item__icon" />
              Select
            </a>
          </Link>

          <Link href="/selectable">
            <a className="index__item">
              <TbHandFinger className="index__item__icon" />
              Selectable
            </a>
          </Link>

          <Link href="/syntax">
            <a className="index__item">
              <TbCode className="index__item__icon" />
              Syntax
            </a>
          </Link>

          <Link href="/tabs">
            <a className="index__item">
              <TbAppWindow className="index__item__icon" />
              Tabs
            </a>
          </Link>

          <Link href="/video-background">
            <a className="index__item">
              <TbVideo className="index__item__icon" />
              Video background
            </a>
          </Link>
        </div>
      </div>
    </Page>
  )
}
