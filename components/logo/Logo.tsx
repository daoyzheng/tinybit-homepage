import { LogoWrapper, NameWrapper } from "./Logo.styled"

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <LogoWrapper className={className}>
      <NameWrapper />
    </LogoWrapper>
  )
}

export default Logo