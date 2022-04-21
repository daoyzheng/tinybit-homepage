import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Theme from '../components/Theme'
import { THEME } from '../lib/constants'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(THEME.dark)
  return (
    <Theme theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  )
}

export default MyApp
