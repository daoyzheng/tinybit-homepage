import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

interface SubheadingWrapperProps {
  isAnimating: boolean
  animationDelay: number
}

export const SubheadingWrapper = styled.div<SubheadingWrapperProps>`
  padding: 0 10px;
  opacity: 0;
  position: relative;
  background-color: var(--red);
  width: fit-content;
  font-size: 18px;
  animation: ${props => props.isAnimating && css`${fadeIn} 500ms forwards ${props.animationDelay}s`};
  transform: translateX(40px);
  ::after {
    content: "";
    width: 180px;
    height: 2px;
    background-color: var(--red);
    position: absolute;
    bottom: 0;
    @media (min-width: 768px) {
      width: 600px;
    }
  }
  @media (min-width: 768px) {
    padding: 0 15px;
  }
  font-size: 16px;
  @media (min-width: 1280px) {
    font-size: 1vw;
  }
`