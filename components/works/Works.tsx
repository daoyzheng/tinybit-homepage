import { useEffect } from "react"
import useReplaceStateEvent from "../../hooks/customReplaceStateEvent"
import Subheading from "../subheading/Subheading"
import { WorksWrapper } from "./Works.styled"

const Works = () => {
  const triggerReplaceStateEvent = useReplaceStateEvent('#works')
  function setWorksObserver() {
    const worksObserverOptions = {
      threshold: 0.4
    }
    const worksObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.location.hash !== '#works') {
            history.pushState({}, '', '#works')
            triggerReplaceStateEvent()
          }
        }
      });
    }, worksObserverOptions)
    const works = document.querySelector('#works-wrapper');
    if (works) worksObserver.observe(works)
  }
  useEffect(() => {
    setWorksObserver()
  })
  return (
    <WorksWrapper className="w-2/3" id="works-wrapper">
      <Subheading isAnimating={true} animationDelay={0}>Works</Subheading>
    </WorksWrapper>
  )
}

export default Works