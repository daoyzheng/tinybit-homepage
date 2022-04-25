import { useEffect, useState } from "react"
import Subheading from "../subheading/Subheading"
import { AboutContentWrapper, AboutWrapper, TextHighlight } from "./About.styled"

const About = () => {
  function setAboutObserver() {
    const aboutObserverOptions = {
      threshold: 0.4
    }
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAnimating(true)
          if (window.location.hash !== '#about') {
            history.pushState({}, '', '#about');
          }
        }
      });
    }, aboutObserverOptions)
    const about = document.querySelector('#about');
    if (about) aboutObserver.observe(about)
  }
  const [isAnimating, setIsAnimating] = useState(false)
  useEffect(() => {
    setAboutObserver()
  })
  return (
    <AboutWrapper className="w-2/3" id="about">
      <Subheading id="about-subheading" isAnimating={isAnimating} animationDelay={0}>About me</Subheading>
      <AboutContentWrapper className="mt-5" isAnimating={isAnimating} animationDelay={0.5}>
        Hello! My name is Dao, and I love to learn and build things on the web. I often spend my
        time building little projects that I find interesting. Currently, my role is a full-stack developer
        on a start-up company building a web platform using <TextHighlight>Vue.js</TextHighlight>,
        <TextHighlight> TypeScript</TextHighlight>,<TextHighlight> .NET</TextHighlight> and
        <TextHighlight> Microsoft Azure</TextHighlight>.
        I&apos;ve worked as a full-stack developer and a front-end developer in the past using technologies
        such as <TextHighlight>Vue.js</TextHighlight>, <TextHighlight> React </TextHighlight>
        and <TextHighlight>Node.js</TextHighlight>.
        When away from the computer, I like to play <TextHighlight>basketball</TextHighlight>,
        listen to <TextHighlight>music</TextHighlight>, watch <TextHighlight>movies</TextHighlight> and
        go <TextHighlight>hiking</TextHighlight> during the summer.
      </AboutContentWrapper>
      {/* <TechnologiesWrapper>
        <div></div>
      </TechnologiesWrapper> */}
    </AboutWrapper>
  )
}

export default About