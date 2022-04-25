import { SubheadingWrapper } from "./Subheading.styled"

interface Props {
  id?: string
  isAnimating: boolean
  animationDelay: number
}

const Subheading: React.FC<Props> = ({ children, id, isAnimating, animationDelay }) => {
  return (
    <SubheadingWrapper id={id} isAnimating={isAnimating} animationDelay={animationDelay}>
      {children}
    </SubheadingWrapper>
  )
}

export default Subheading