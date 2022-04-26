import { useRouter } from "next/router"
import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { ScrollContext } from "../context/ScrollContext"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import { AboutContentWrapper, AboutWrapper, TechnologiesWrapper, TechnologyCategoryItem, TextHighlight } from "./About.styled"

const About = () => {
  const triggerReplaceStateEvent = useReplaceStateEvent('#about')
  const setAboutObserver = useCallback(() => {
    const aboutObserverOptions = {
      threshold: 0.4
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
  const [isAnimating, setIsAnimating] = useState(false)
  const [translateRate, setTranslateRate] = useState(0)
  const { scrollY, viewportHeight } = useContext(ScrollContext)
  useEffect(() => {
    const height = scrollY > viewportHeight ? scrollY - viewportHeight : scrollY
    const rate = height * 0.15
    setTranslateRate(rate)
    setAboutObserver()
  },[scrollY, viewportHeight, setAboutObserver])
  return (
    <>
      <Watermark translateRate={translateRate}>About</Watermark>
      <AboutWrapper className="w-2/3" id="about-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>About</Subheading>
        <AboutContentWrapper className="mt-5" isAnimating={isAnimating} animationDelay={0.5}>
          Hello! My name is Dao, and I love to learn and build things for the web. I often spend my
          time building little projects that I find interesting and always trying to improve my skillsets. Currently, my role is a full-stack developer
          on a start-up company in Calgary. In the past, I&apos;ve also worked as a full-stack developer and a front-end developer.
          When away from the computer, I like to play basketball and go hiking during the summer.
        </AboutContentWrapper>
        <div className="mt-2 space-y-3 mb-16">
          <TechnologiesWrapper isAnimating={isAnimating} animationDelay={0.7}>
            <TextHighlight className="text-lg">&gt;</TextHighlight> Here are some technologies that I have worked with
          </TechnologiesWrapper>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={0.8}>
            <div>Front-end</div>
            <div>
              <div>Vue.js</div>
              <div>Quasar</div>
              <div>Vuex</div>
              <div>React</div>
              <div>Next.js</div>
              <div>TypeScript</div>
              <div>Styled-components</div>
              <div>Tailwindcss</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1}>
            <div>Back-end</div>
            <div>
              <div>.NET</div>
              <div>Node.js</div>
              <div>Koa</div>
              <div>Strapi</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.2}>
            <div>Web Services</div>
            <div>
              <div>Heroku</div>
              <div>AWS S3</div>
              <div>AWS Route 53</div>
              <div>Azure Functions</div>
              <div>Azure Api Management</div>
              <div>Azure Service Bus</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.4}>
            <div>Project Management</div>
            <div>
              <div>Trello</div>
              <div>Jira</div>
              <div>Azure Devops</div>
            </div>
          </TechnologyCategoryItem>
        </div>
      </AboutWrapper>
    </>
  )
}

export default About