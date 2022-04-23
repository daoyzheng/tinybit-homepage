import type { NextPage } from 'next'
import About from '../components/about/About'
import Intro from '../components/Intro/Intro'
import Nav from '../components/nav/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <section className="h-screen flex justify-center items-center w-full">
        <Intro/>
      </section>
      <section id="about" className="h-screen flex justify-center">
        <About/>
      </section>
    </div>
  )
}

export default Home
