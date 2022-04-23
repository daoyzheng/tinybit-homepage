import Image from "next/image"
import { Highlight, ImageWrapper, IntroWrapper } from "./Intro.styled"

const Intro = () => {
  return (
    <IntroWrapper className="w-2/3">
      <h1>Hello, my name is</h1>
      <h1>Dao Zheng</h1>
      <div>and I&apos;m a <Highlight>Software Developer</Highlight>.</div>
      <ImageWrapper>
        <Image src="/mouse.png" width="50px" height="50px" alt="mouse" className="absolute bottom-0"/>
      </ImageWrapper>
    </IntroWrapper>
  )
}

export default Intro