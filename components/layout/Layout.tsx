import Head from "next/head"
import Topbar from "../topbar/Topbar"
import { Main } from "./Layout.styled"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tinybit Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Tinybit homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout