import Image from "next/image"
import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { ScrollContext } from "../context/ScrollContext"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import Img from "./Img"
import { Sparkle, WorksDescriptionWrapper, WorksWrapper } from "./Works.styled"

const Works = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [translateRate, setTranslateRate] = useState(0)
  const { scrollY, viewportHeight } = useContext(ScrollContext)
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
    const rate = (scrollY - 2 * viewportHeight) * 0.15
    setTranslateRate(rate)
  }, [scrollY, viewportHeight])

  useEffect(() => {
    setWorksObserver()
    handleRateChange()
  }, [setWorksObserver, handleRateChange])
  return (
    <>
      <Watermark translateRate={translateRate}>Works</Watermark>
      <WorksWrapper className="w-2/3" id="works-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>Works</Subheading>
        <div className="mt-12 flex gap-6">
          <Img src="/blog_light.png" />
          <WorksDescriptionWrapper>
            <div>Personal Blog</div>
            <div>
              <div>Next.js</div>
              <div>React</div>
              <div>Styled Components</div>
              <div>TailwindCSS</div>
              <div>TypeScript</div>
              <div>Strapi</div>
            </div>
            <div>
              A personal blog utilizing a headless CMS, Strapi, along with Next.js for static site generation.
            </div>
          </WorksDescriptionWrapper>
        </div>
      </WorksWrapper>
    </>
  )
}

export default Works