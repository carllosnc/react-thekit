import { DocPage } from '@/templates'
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
  TbPhoto,
} from 'react-icons/tb'

import { SiTailwindcss, SiTypescript, SiFramer, SiReact } from 'react-icons/si'

export default function Home() {
  return (
    <DocPage>
      <div className="index">
        <p className="text-base text-neutral-700 w-full">
          <b>TheKit</b> is a collection of React components that are designed to
          be simple, easy to use, reponsive and customizable. All components are
          built with <b>TypeScript</b>, <b>Tailwind</b> and <b>React</b>.
        </p>

        <div className="flex gap-[10px] w-full">
          <SiTypescript className="bg-black text-white text-[40px] p-[10px] rounded-md" />
          <SiReact className="bg-black text-white text-[40px] p-[10px] rounded-md" />
          <SiTailwindcss className="bg-black text-white text-[40px] p-[10px] rounded-md" />
          <SiFramer className="bg-black text-white text-[40px] p-[10px] rounded-md" />
        </div>

        <div className="text-base text-neutral-700 w-full flex flex-col gap-4">
          <span className="text-red-700">
            🚨 TheKit is an experiment(not ready to production) and has
            unconventional method to download and install components.
          </span>
          <ul className="flex flex-col gap-2">
            <li>
              • All components are independent and can be downloaded separately.
            </li>
            <li>
              • Each component is composed of 4 files: structure, style, test
              and README.
            </li>
            <li>
              • {"There's"} no versioning, the component is always the latest.
            </li>
          </ul>
        </div>

        <div className="index__menu">
          <Link data-testid="button-link" href="/button">
            <span className="index__item">
              <TbRectangle className="index__item__icon" />
              Button
            </span>
          </Link>

          <Link data-testid="carousel-link" href="/carousel">
            <span className="index__item">
              <TbSlideshow className="index__item__icon" />
              Carousel
            </span>
          </Link>

          <Link data-testid="checkbox-link" href="/checkbox">
            <span className="index__item">
              <TbCheckbox className="index__item__icon" />
              Checkbox
            </span>
          </Link>

          <Link data-testid="drawer-link" href="/drawer">
            <span className="index__item">
              <TbLayoutSidebar className="index__item__icon" />
              Drawer
            </span>
          </Link>

          <Link data-testid="expander-link" href="/expander">
            <span className="index__item">
              <TbArrowBarDown className="index__item__icon" />
              Expander
            </span>
          </Link>

          <Link data-testid="if-link" href="/if">
            <span className="index__item">
              <TbQuestionMark className="index__item__icon" />
              If (condition)
            </span>
          </Link>

          <Link data-testid="image-block-link" href="/image-block">
            <span className="index__item">
              <TbPhoto className="index__item__icon" />
              Image block
            </span>
          </Link>

          <Link data-testid="image-expander-link" href="/image-expander">
            <span className="index__item">
              <TbPictureInPictureOff className="index__item__icon" />
              Image expander
            </span>
          </Link>

          <Link data-testid="input-link" href="/input">
            <span className="index__item">
              <TbBallpen className="index__item__icon" />
              Input
            </span>
          </Link>

          <Link data-testid="modal-link" href="/modal">
            <span className="index__item">
              <TbBoxMultiple className="index__item__icon" />
              Modal
            </span>
          </Link>

          <Link data-testid="navbar-link" href="/navbar">
            <span className="index__item">
              <TbLayoutNavbar className="index__item__icon" />
              Navbar
            </span>
          </Link>

          <Link data-testid="radio-link" href="/radio">
            <span className="index__item">
              <TbCircleDot className="index__item__icon" />
              Radio
            </span>
          </Link>

          <Link data-testid="regular-table-link" href="/regular-table">
            <span className="index__item">
              <TbTable className="index__item__icon" />
              Regular Table
            </span>
          </Link>

          <Link data-testid="reveal-link" href="/reveal">
            <span className="index__item">
              <TbArrowBigUpLines className="index__item__icon" />
              Reveal
            </span>
          </Link>

          <Link data-testid="select-link" href="/select">
            <span className="index__item">
              <TbSelect className="index__item__icon" />
              Select
            </span>
          </Link>

          <Link data-testid="selectable-link" href="/selectable">
            <span className="index__item">
              <TbHandFinger className="index__item__icon" />
              Selectable
            </span>
          </Link>

          <Link data-testid="syntax-link" href="/syntax">
            <span className="index__item">
              <TbCode className="index__item__icon" />
              Syntax
            </span>
          </Link>

          <Link data-testid="tabs-link" href="/tabs">
            <span className="index__item">
              <TbAppWindow className="index__item__icon" />
              Tabs
            </span>
          </Link>

          <Link data-testid="video-background-link" href="/video-background">
            <span className="index__item">
              <TbVideo className="index__item__icon" />
              Video background
            </span>
          </Link>
        </div>
      </div>
    </DocPage>
  )
}
