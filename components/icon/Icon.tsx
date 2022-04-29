import Image from "next/image"
import { IconWrapper } from "./Icon.styled"

interface Props {
  url: string
  tooltip: string
  src: string
  isHorizontal?: boolean
}
const Icon = ({ src, url, tooltip, isHorizontal }: Props) => {
  return (
    <IconWrapper content={tooltip} isHorizontal={isHorizontal}>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={src} width="30" height="30" alt={tooltip}/>
      </a>
    </IconWrapper>
  )
}

export default Icon