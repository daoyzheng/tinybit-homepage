import type { NextPage } from 'next'
import { useState } from 'react'
import About from '../components/about/About'
import Intro from '../components/Intro/Intro'
import Nav from '../components/nav/Nav'
import Works from '../components/works/Works'

const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <section className="h-screen flex justify-center items-center w-full">
        <Intro/>
      </section>
      <section id="about" className="min-h-screen flex justify-center">
        <About/>
      </section>
      <section id="works" className="min-h-screen flex justify-center">
        <Works/>
      </section>
      <section id="contact" className="min-h-screen flex justify-center">
        hello
      </section>
    </div>
  )
}

export default Home
