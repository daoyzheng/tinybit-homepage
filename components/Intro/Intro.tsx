import Image from "next/image"
import { useEffect, useState } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { Watermark } from "../index/index.styled"
import { Highlight, ImageWrapper, IntroWrapper } from "./Intro.styled"

const Intro = () => {
  const triggerReplaceStateEvent = useReplaceStateEvent('')
  const [translateRate, setTranslateRate] = useState(0)
  useEffect(() => {
    setIntroObserver(triggerReplaceStateEvent)
    const onScroll = () => {
      const rate = window.scrollY * 0.15
      setTranslateRate(rate)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })
  return (
    <>
      <Watermark translateRate={translateRate}>Home</Watermark>
      <IntroWrapper className="w-2/3" id="intro">
        <h1>Hello, my name is</h1>
        <h1>Dao Zheng</h1>
        <div>and I&apos;m a <Highlight>Software Developer</Highlight>.</div>
        <ImageWrapper>
          <Image src="/mouse.png" width="50px" height="50px" alt="mouse" className="absolute bottom-0"/>
        </ImageWrapper>
      </IntroWrapper>
    </>
  )
}

export default Intro

function setIntroObserver(triggerReplaceStateEvent: () => void) {
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
}