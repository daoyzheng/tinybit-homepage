import Image from "next/image"
import { IconWrapper } from "./Icon.styled"

interface Props {
  url: string
  tooltip: string
  src: string
  isHorizontal?: boolean
  dense?: boolean
}
const Icon = ({ src, url, tooltip, isHorizontal, dense }: Props) => {
  return (
    <IconWrapper content={tooltip} isHorizontal={isHorizontal}>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={src} width={dense ? '24' : '28'} height={dense ? '24' : '28'} alt={tooltip}/>
      </a>
    </IconWrapper>
  )
}

export default Icon