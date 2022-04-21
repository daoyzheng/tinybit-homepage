import Head from "next/head"
import Navbar from "./navbar/Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tinybit Home</title>
        <meta name="viewport" content="width=device-widht, initial-scale=1"/>
        <meta name="description" content="Tinybit homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout