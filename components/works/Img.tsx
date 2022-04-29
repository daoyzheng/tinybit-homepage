import Image from "next/image"
import { WorksImageWrapper } from "./Works.styled"

interface Props {
  src: string
  url?: string
}

const Img = ({ src, url }: Props) => {
  return (
    <WorksImageWrapper href={url} target="_blank" rel="noreferrer">
      <Image src={src} width={500} height={300} alt="works" layout="responsive" />
    </WorksImageWrapper>
  )
}

export default Img