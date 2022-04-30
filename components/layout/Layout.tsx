import Head from "next/head"
import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"
import { LocaleContextProvider } from "../context/LocaleContext"
import { ScrollContextProvider } from "../context/ScrollContext"
import Topbar from "../topbar/Topbar"
import { Main } from "./Layout.styled"

const Layout: React.FC = ({ children }) => {
  const router = useRouter()
  const { locale } = router
  const [currentLocale, setCurrentLocale] = useState(locale)
  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale)
  }
  return (
    <>
      <Head>
        <title>Dao Zheng</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Dao Zheng homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollContextProvider>
        <Topbar onLocaleChange={handleLocaleChange}/>
        <LocaleContextProvider locale={currentLocale || 'en'}>
          <Main>
            {children}
          </Main>
        </LocaleContextProvider>
      </ScrollContextProvider>
    </>
  )
}

export default Layout