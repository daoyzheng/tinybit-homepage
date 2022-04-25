import { SubheadingWrapper } from "./Subheading.styled"

const Subheading: React.FC = ({ children }) => {
  return (
    <SubheadingWrapper>
      {children}
    </SubheadingWrapper>
  )
}

export default Subheading