import { useRouter } from "next/router"
import { useEffect } from "react"
import Subheading from "../subheading/Subheading"
import { AboutWrapper } from "./About.styled"

const About = () => {
  const router = useRouter()
  useEffect(() => {
    const aboutObserverOptions = {
      threshold: 0.8
    }
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.location.hash !== '#about') {
            history.pushState({}, '', '#about');
          }
        }
      });
    }, aboutObserverOptions)
    const about = document.querySelector('#about');
    if (about) aboutObserver.observe(about)
  })
  return (
    <AboutWrapper className="w-2/3" id="about">
      <Subheading>About me</Subheading>
    </AboutWrapper>
  )
}

export default About