import { useRouter } from "next/router"
import { LogoWrapper, NameWrapper } from "./Logo.styled"

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => {
  const router = useRouter()
  const handleOnClick = () => {
    router.push('/')
  }
  return (
    <LogoWrapper className={className} onClick={() => handleOnClick()}>
      <NameWrapper />
    </LogoWrapper>
  )
}

export default Logo