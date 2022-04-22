import Head from "next/head"
import Topbar from "./topbar/Topbar"

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
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout