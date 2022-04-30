import type { NextPage } from 'next'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import { OffColorSection } from '../components/index/index.styled'
import Intro from '../components/Intro/Intro'
import Nav from '../components/nav/Nav'
import Works from '../components/works/Works'

const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <OffColorSection className="h-screen flex justify-center items-center w-full relative">
        <Intro/>
      </OffColorSection>
      <section id="about" className="min-h-screen flex justify-center relative">
        <About/>
      </section>
      <OffColorSection id="works" className="min-h-screen flex justify-center relative">
        <Works/>
      </OffColorSection>
      <section id="contact" className="min-h-screen flex justify-center relative">
        <Contact/>
      </section>
      <section className="h-36 flex justify-center items-end">
        <Footer/>
      </section>
    </div>
  )
}

export default Home
