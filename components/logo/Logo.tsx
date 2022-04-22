import {
  HalfCircle,
  HorizontalLine,
  LetterDWrapper,
  LetterSeparator,
  LetterZWrapper,
  LogoWrapper,
  SlantedLine,
  VerticalLine
} from "./Logo.styled"

const Logo = () => {
  return (
    <LogoWrapper>
      <LetterDWrapper>
        <VerticalLine />
        <HalfCircle />
      </LetterDWrapper>
      <LetterSeparator />
      <LetterZWrapper>
        <HorizontalLine />
        <SlantedLine />
        <HorizontalLine />
      </LetterZWrapper>
    </LogoWrapper>
  )
}

export default Logo