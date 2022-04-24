import { SubheadingWrapper } from "./Subheading.styled"

const Subheading: React.FC = ({ children }) => {
  return (
    <SubheadingWrapper>
      hello
      {children}
    </SubheadingWrapper>
  )
}

export default Subheading