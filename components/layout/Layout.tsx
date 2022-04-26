import Head from "next/head"
import { createContext, useEffect, useState } from "react"
import { ScrollContextProvider } from "../context/ScrollContext"
import Topbar from "../topbar/Topbar"
import { Main } from "./Layout.styled"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dao Zheng Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Dao Zheng homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollContextProvider>
        <Topbar />
        <Main>
          {children}
        </Main>
      </ScrollContextProvider>
    </>
  )
}

export default Layout