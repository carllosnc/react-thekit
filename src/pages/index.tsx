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
            <span className="index__item">
              <TbRectangle className="index__item__icon" />
              Button
            </span>
          </Link>

          <Link href="/carousel">
            <span className="index__item">
              <TbSlideshow className="index__item__icon" />
              Carousel
            </span>
          </Link>

          <Link href="/checkbox">
            <span className="index__item">
              <TbCheckbox className="index__item__icon" />
              Checkbox
            </span>
          </Link>

          <Link href="/drawer">
            <span className="index__item">
              <TbLayoutSidebar className="index__item__icon" />
              Drawer
            </span>
          </Link>

          <Link href="/expander">
            <span className="index__item">
              <TbArrowBarDown className="index__item__icon" />
              Expander
            </span>
          </Link>

          <Link href="/if">
            <span className="index__item">
              <TbQuestionMark className="index__item__icon" />
              If (condition)
            </span>
          </Link>

          <Link href="/image-expander">
            <span className="index__item">
              <TbPictureInPictureOff className="index__item__icon" />
              Image expander
            </span>
          </Link>

          <Link href="/input">
            <span className="index__item">
              <TbBallpen className="index__item__icon" />
              Input
            </span>
          </Link>

          <Link href="/modal">
            <span className="index__item">
              <TbBoxMultiple className="index__item__icon" />
              Modal
            </span>
          </Link>

          <Link href="/navbar">
            <span className="index__item">
              <TbLayoutNavbar className="index__item__icon" />
              Navbar
            </span>
          </Link>

          <Link href="/radio">
            <span className="index__item">
              <TbCircleDot className="index__item__icon" />
              Radio
            </span>
          </Link>

          <Link href="/regular-table">
            <span className="index__item">
              <TbTable className="index__item__icon" />
              Regular Table
            </span>
          </Link>

          <Link href="/reveal">
            <span className="index__item">
              <TbArrowBigUpLines className="index__item__icon" />
              Reveal
            </span>
          </Link>

          <Link href="/select">
            <span className="index__item">
              <TbSelect className="index__item__icon" />
              Select
            </span>
          </Link>

          <Link href="/selectable">
            <span className="index__item">
              <TbHandFinger className="index__item__icon" />
              Selectable
            </span>
          </Link>

          <Link href="/syntax">
            <span className="index__item">
              <TbCode className="index__item__icon" />
              Syntax
            </span>
          </Link>

          <Link href="/tabs">
            <span className="index__item">
              <TbAppWindow className="index__item__icon" />
              Tabs
            </span>
          </Link>

          <Link href="/video-background">
            <span className="index__item">
              <TbVideo className="index__item__icon" />
              Video background
            </span>
          </Link>
        </div>
      </div>
    </Page>
  )
}
