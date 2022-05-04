import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { LocaleContext } from "../context/LocaleContext"
import { ScrollContext } from "../context/ScrollContext"
import i18n from "../i18n"
import Icon from "../icon/Icon"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import Img from "./Img"
import { WorksDescriptionWrapper, WorksWrapper, WorkWrapper } from "./Works.styled"

const Works = () => {
  const locale = useContext(LocaleContext)
  const translation = locale === 'en' ? i18n.en : i18n.zh
  const [isAnimating, setIsAnimating] = useState(false)
  const [translateRate, setTranslateRate] = useState(0)
  const { scrollY, viewportHeight, viewportWidth } = useContext(ScrollContext)
  const triggerReplaceStateEvent = useReplaceStateEvent('#works')
  const setWorksObserver = useCallback(() => {
    const worksObserverOptions = {
      threshold: 0.5
    }
    const worksObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAnimating(true)
          if (window.location.hash !== '#works') {
            history.pushState({}, '', '#works')
            triggerReplaceStateEvent()
          }
        }
      });
    }, worksObserverOptions)
    const works = document.querySelector('#works-wrapper');
    if (works) worksObserver.observe(works)
  },[triggerReplaceStateEvent])
  const handleRateChange = useCallback(() => {
    const rate = (scrollY - 2 * viewportHeight) * (viewportWidth > 1024 ? 0.15 : 0)
    setTranslateRate(rate)
  }, [scrollY, viewportHeight, viewportWidth])

  useEffect(() => {
    setWorksObserver()
    handleRateChange()
  }, [setWorksObserver, handleRateChange])
  return (
    <>
      <Watermark translateRate={translateRate}>{translation.nav.works}</Watermark>
      <WorksWrapper className="w-2/3 mb-16" id="works-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>{translation.nav.works}</Subheading>
        <WorkWrapper className="mt-12 flex gap-6 lg:flex-nowrap flex-wrap" isAnimating={isAnimating} animationDelay={0.5}>
          <Img src="/blog_light.png" url="https://blog.daozheng.me"/>
          <WorksDescriptionWrapper>
            <a href="https://blog.daozheng.me" target="_blank" rel="noreferrer">{translation.works.personalBlog}</a>
            <div className="gap-4">
              <div>Next.js</div>
              <div>React</div>
              <div>Styled Components</div>
              <div>TailwindCSS</div>
              <div>TypeScript</div>
              <div>Strapi</div>
            </div>
            <div className="mt-5">
              {translation.works.blogDescription}
            </div>
            <div className="mt-5">
              <Icon url="https://github.com/daoyzheng/tinybit-blog-frontend" src="/github_icon.png" tooltip="Project Repo"/>
            </div>
          </WorksDescriptionWrapper>
        </WorkWrapper>
      </WorksWrapper>
    </>
  )
}

export default Works