import { useRouter } from "next/router"
import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { LocaleContext } from "../context/LocaleContext"
import { ScrollContext } from "../context/ScrollContext"
import i18n from "../i18n"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import { AboutContentWrapper, AboutWrapper, TechnologiesWrapper, TechnologyCategoryItem, TextHighlight } from "./About.styled"

const About = () => {
  const locale = useContext(LocaleContext)
  const translation = locale === 'en' ? i18n.en : i18n.zh
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
      <Watermark translateRate={translateRate}>{translation.nav.about}</Watermark>
      <AboutWrapper className="w-2/3 mb-16" id="about-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>{translation.nav.about}</Subheading>
        <AboutContentWrapper className="mt-5" isAnimating={isAnimating} animationDelay={0.5}>{translation.about.description}</AboutContentWrapper>
        <div className="mt-2 space-y-3 mb-16">
          <TechnologiesWrapper isAnimating={isAnimating} animationDelay={0.7}>
            <TextHighlight className="text-lg">&gt;</TextHighlight> {translation.about.technologyDescription}
          </TechnologiesWrapper>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={0.8}>
            <div>{translation.about.frontEnd}</div>
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
            <div>{translation.about.backEnd}</div>
            <div>
              <div>.NET</div>
              <div>Node.js</div>
              <div>Koa</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.2}>
            <div>{translation.about.databases}</div>
            <div>
              <div>PostgreSQL</div>
              <div>Cosmos DB</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.4}>
            <div>{translation.about.cloudServices}</div>
            <div>
              <div>Heroku</div>
              <div>AWS S3</div>
              <div>AWS Route 53</div>
              <div>Azure Functions</div>
              <div>Azure Api Management</div>
            </div>
          </TechnologyCategoryItem>
          <TechnologyCategoryItem isAnimating={isAnimating} animationDelay={1.6}>
            <div>{translation.about.projectManagement}</div>
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