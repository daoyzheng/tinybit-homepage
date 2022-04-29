import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { ScrollContext } from "../context/ScrollContext"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import { ContactContentWrapper, ContactWrapper } from "./Contact.styled"

const Contact = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [translateRate, setTranslateRate] = useState(0)
  const { scrollY, viewportHeight, viewportWidth } = useContext(ScrollContext)
  const triggerReplaceStateEvent = useReplaceStateEvent('#contact')

  const handleRateChange = useCallback(() => {
    const rate = (scrollY - 3 * viewportHeight) * (viewportWidth > 1024 ? 0.15 : 0)
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
          if (window.location.hash !== '#contact') {
            history.pushState({}, '', '#contact')
            triggerReplaceStateEvent()
          }
        }
      });
    }, aboutObserverOptions)
    const about = document.querySelector('#contact-wrapper');
    if (about) aboutObserver.observe(about)
  }, [triggerReplaceStateEvent])
  useEffect(() => {
    setAboutObserver()
    handleRateChange()
  },[handleRateChange, setAboutObserver])
  return (
    <>
      <Watermark translateRate={translateRate}>Contact</Watermark>
      <ContactWrapper className="w-2/3 mb-16" id="contact-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>Contact</Subheading>
        <ContactContentWrapper className="flex flex-col justify-center items-center mt-14 md:mt-20" isAnimating={isAnimating} animationDelay={0.5}>
          <div>Want to connect?</div>
          <div className="mt-7">Feel free to shoot me an email if you have any questions, or just want to say hello, or is interested in coding, playing basketball, or hiking together.</div>
          <button className="mt-20">
            <a href="mailto:daoyzheng@gmail.com">
              Connect
            </a>
          </button>
        </ContactContentWrapper>
      </ContactWrapper>
    </>
  )
}

export default Contact