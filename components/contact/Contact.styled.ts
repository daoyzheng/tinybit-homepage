import styled, { css, keyframes } from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 150px;
`

interface ContactContentWrapperProps {
  isAnimating: boolean
  animationDelay: number
}
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ContactContentWrapper = styled.div<ContactContentWrapperProps>`
  opacity: 0;
  animation: ${props => props.isAnimating && css`${fadeIn} 600ms forwards ${props.animationDelay}s`};
  > :first-child {
    color: var(--lightred);
    font-size: 30px;
    @media (min-width: 1280px) {
      font-size: 3vw;
    }
  }
  > :nth-child(2) {
    max-width: 600px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    @media (min-width: 1280px) {
      font-size: 1vw;
    }
  }
  > :nth-child(3) {
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid var(--red);
    border-radius: 5px;
    &:hover {
      background-color: var(--lightred);
    }
    @media (min-width: 1280px) {
      font-size: 1vw;
    }
  }
`