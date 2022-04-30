import Image from "next/image"
import { useCallback, useContext, useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { LocaleContext } from "../context/LocaleContext"
import i18n from "../i18n"
import { Highlight, ImageWrapper, IntroWrapper } from "./Intro.styled"

const Intro = () => {
  const locale = useContext(LocaleContext)
  const translation = locale === 'en' ? i18n.en : i18n.zh
  const triggerReplaceStateEvent = useReplaceStateEvent('')
  const setIntroObserver = useCallback(() => {
    const introObserverOptions = {
      threshold: 0.8
    }
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.location.hash.length > 1) {
            history.replaceState({}, '', '/')
            triggerReplaceStateEvent()
          }
        }
      })
    }, introObserverOptions)
    const intro = document.querySelector('#intro')
    if (intro)
      introObserver.observe(intro)
  }, [triggerReplaceStateEvent])
  useEffect(() => {
    setIntroObserver()
  }, [setIntroObserver])
  return (
    <>
      <IntroWrapper className="w-2/3" id="intro">
        <h1>{translation.intro.welcome}</h1>
        <h1>{translation.intro.name}</h1>
        <div>{translation.intro.connect}<Highlight>{translation.intro.softwareDeveloper}</Highlight></div>
        {/* <ImageWrapper>
          <Image src="/mouse.png" width="50px" height="50px" alt="mouse" className="absolute bottom-0"/>
        </ImageWrapper> */}
      </IntroWrapper>
    </>
  )
}

export default Intro
