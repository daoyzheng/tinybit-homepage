import { useRouter } from "next/router"
import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { ScrollContext } from "../context/ScrollContext"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import { AboutContentWrapper, AboutWrapper, TechnologiesWrapper, TechnologyCategoryItem, TextHighlight } from "./About.styled"

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [translateRate, setTranslateRate] = useState(0)
  const { scrollY, viewportHeight, viewportWidth } = useContext(ScrollContext)
  const triggerReplaceStateEvent = useReplaceStateEvent('#about')

  const handleRateChange = useCallback(() => {
    const rate = (scrollY - viewportHeight) * (viewportWidth > 1024 ? 0.15 : 0)
    setTranslateRate(rate)
  }, [scrollY, viewportHeight, viewportWidth])

  const setAboutObserver = useCallback(() => {
    const aboutObserverOptions = {
      threshold: 0.5
    }
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAnimating(true)
          if (window.location.hash !== '#about') {
            history.pushState({}, '', '#about')
            triggerReplaceStateEvent()
          }
        }
      });
    }, aboutObserverOptions)
    const about = document.querySelector('#about-wrapper');
    if (about) aboutObserver.observe(about)
  }, [triggerReplaceStateEvent])
  useEffect(() => {
    setAboutObserver()
    handleRateChange()
  },[handleRateChange, setAboutObserver])
  return (
    <>
      <Watermark translateRate={translateRate}>About</Watermark>
      <AboutWrapper className="w-2/3 mb-16" id="about-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>About</Subheading>
        <AboutContentWrapper className="mt-5" isAnimating={isAnimating} animationDelay={0.5}>
          Hello! My name is Dao, and I love to learn and build software applications. I often spend my
          time taking on small projects to improve my skillsets. Currently, I&apos;m in a role with a start-up company based in Calgary
          with experience as a full-stack and a front-end developer. When away from the screen, I enjoy being active by playing basketball and hiking.
        </AboutContentWrapper>
        <div className="mt-2 space-y-3 mb-16">
          <TechnologiesWrapper isAnimating={isAnimating} animationDelay={0.7}>
            <TextHighlight className="text-lg">&gt;</TextHighlight> Here are some technologies that I have worked with
          </TechnologiesWrapper>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={0.8}>
            <div>Front-end</div>
            <div>
              <div>Vue.js</div>
              <div>React</div>
              <div>Next.js</div>
              <div>TypeScript</div>
              <div>Styled Components</div>
              <div>TailwindCSS</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1}>
            <div>Back-end</div>
            <div>
              <div>.NET</div>
              <div>Node.js</div>
              <div>Koa</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.2}>
            <div>Databases</div>
            <div>
              <div>PostgreSQL</div>
              <div>Cosmos DB</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.4}>
            <div>Cloud Services</div>
            <div>
              <div>Heroku</div>
              <div>AWS S3</div>
              <div>AWS Route 53</div>
              <div>Azure Functions</div>
              <div>Azure Api Management</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.6}>
            <div>Project Management</div>
            <div>
              <div>Trello</div>
              <div>Jira</div>
            </div>
          </TechnologyCategoryItem>
        </div>
      </AboutWrapper>
    </>
  )
}

export default About