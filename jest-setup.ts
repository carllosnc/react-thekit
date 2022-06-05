import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// setup i18n
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { CONTENT } from './src/content'

const mock = () => {}
Object.defineProperty(window, 'scrollTo', { value: mock, writable: true })

i18n.use(initReactI18next).init(CONTENT)
