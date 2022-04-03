import '@fontsource/roboto-condensed/400.css'
import '@fontsource/roboto-condensed/700.css'
import '../styles/global.css'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import { CONTENT } from '../content'

i18n.use(initReactI18next).init(CONTENT)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
