import Image from "next/image"
import { useEffect } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import { Highlight, ImageWrapper, IntroWrapper, Watermark } from "./Intro.styled"

const Intro = () => {
  const triggerReplaceStateEvent = useReplaceStateEvent('')
  useEffect(() => {
    const introObserverOptions = {
      threshold: 0.8
    }
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.location.hash.length > 1) {
            history.replaceState({}, '', '/');
            triggerReplaceStateEvent()
          }
        }
      });
    }, introObserverOptions)
    const intro = document.querySelector('#intro');
    if (intro) introObserver.observe(intro)
  })
  return (
    <>
      <Watermark>Home</Watermark>
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