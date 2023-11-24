// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { CONTENT } from './src/content'

const mock = () => {}
Object.defineProperty(window, 'scrollTo', { value: mock, writable: true })

i18n.use(initReactI18next).init(CONTENT)
