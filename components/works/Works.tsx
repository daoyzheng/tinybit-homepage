import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { ScrollContext } from "../context/ScrollContext"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import { WorksWrapper } from "./Works.styled"

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
      </WorksWrapper>
    </>
  )
}

export default Works