import styled, { css, keyframes } from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: 150px;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
interface AboutContentWrapperProps {
  isAnimating: boolean
  animationDelay: number
}
export const AboutContentWrapper = styled.div<AboutContentWrapperProps>`
  opacity: 0;
  font-size: 16px;
  line-height: 30px;
  animation: ${props => props.isAnimating && css`${fadeIn} 500ms forwards ${props.animationDelay}s`};
`

export const TextHighlight = styled.span`
  color: var(--lightred);
  font-weight: 600;
`