import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { LocaleContext } from "../context/LocaleContext"
import { ScrollContext } from "../context/ScrollContext"
import i18n from "../i18n"
import { Watermark } from "../index/index.styled"
import Subheading from "../subheading/Subheading"
import { ContactContentWrapper, ContactWrapper } from "./Contact.styled"

const Contact = () => {
  const locale = useContext(LocaleContext)
  const translation = locale === 'en' ? i18n.en : i18n.zh
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
      <Watermark translateRate={translateRate}>{translation.nav.contact}</Watermark>
      <ContactWrapper className="w-2/3 mb-16" id="contact-wrapper">
        <Subheading isAnimating={isAnimating} animationDelay={0}>{translation.nav.contact}</Subheading>
        <ContactContentWrapper className="flex flex-col justify-center items-center mt-14 md:mt-20" isAnimating={isAnimating} animationDelay={0.5}>
          <div>{translation.contact.title}</div>
          <div className="mt-7">{translation.contact.content}</div>
          <button className="mt-20">
            <a href="mailto:daoyzheng@gmail.com">
              {translation.contact.connect}
            </a>
          </button>
        </ContactContentWrapper>
      </ContactWrapper>
    </>
  )
}

export default Contact