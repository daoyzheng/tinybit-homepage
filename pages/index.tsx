import type { NextPage } from 'next'
import { useState } from 'react'
import About from '../components/about/About'
import { OffColorSection } from '../components/index/index.styled'
import Intro from '../components/Intro/Intro'
import Nav from '../components/nav/Nav'
import Works from '../components/works/Works'

const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <OffColorSection className="h-screen flex justify-center items-center w-full">
        <Intro/>
      </OffColorSection>
      <section id="about" className="min-h-screen flex justify-center">
        <About/>
      </section>
      <OffColorSection id="works" className="min-h-screen flex justify-center">
        <Works/>
      </OffColorSection>
      <section id="contact" className="min-h-screen flex justify-center">
        hello
      </section>
    </div>
  )
}

export default Home
