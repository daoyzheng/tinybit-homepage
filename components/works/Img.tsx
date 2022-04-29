import Image from "next/image"
import { WorksImageWrapper } from "./Works.styled"

interface Props {
  src: string
}

const Img = ({ src }: Props) => {
  return (
    <WorksImageWrapper>
      <Image src={src} width={500} height={300} alt="works_blog" layout="responsive"/>
    </WorksImageWrapper>
  )
}

export default Img