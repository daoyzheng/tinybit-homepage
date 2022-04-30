import styled, { keyframes } from "styled-components";

const typewritter = keyframes`
  to {
    left: 100%;
  }
`

const fadeIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const cursor = keyframes`
  0% {
    height: 100%;
  }
  to {
    left: 100%;
    height: 100%;
  }
`

const blink = keyframes`
  to {
    background-color: transparent;
  }
`

export const IntroWrapper = styled.div`
  position: relative;
  font-family: 'Source Code Pro', monospace;
  font-size: 5vw;
  h1 {
    position: relative;
    width: fit-content;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      width: 2px;
      background-color: white;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--grey);
    }
  }
  h1:first-child {
    ::before {
      animation: ${typewritter} 1.5s steps(17) .7s forwards;
    }
    ::after {
      animation:
        ${cursor} 1.5s steps(17) .7s,
        ${blink} 0.7s steps(17) infinite;
    }
  }
  h1:nth-child(2) {
    font-size: 10vw;
    font-weight: bold;
    color: var(--red);
    ::before {
      animation: ${typewritter} 1.2s steps(9) 2.5s forwards;
    }
    ::after {
      height: 0;
      animation:
        ${cursor} 1.2s steps(9) 2.5s,
        ${blink} 1s steps(9) infinite;
    }
  }
  & > :nth-child(3) {
    transform: translateY(10px);
    opacity: 0;
    animation: ${fadeIn} 0.8s ease 4.2s forwards;
  }
  @media (min-width: 768px) {
    font-size: 3.5rem;
    h1 div{
      font-size: 32px;
    }
  }
  @media (min-width: 1280px) {
    h1:nth-child(2) {
      font-size: 8rem;
    }
  }
`

export const Highlight = styled.span`
  color: var(--red);
  font-weight: bold;
`
const scale = keyframes`
  25% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`

export const ImageWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease 5.0s forwards, ${scale} .5s ease 5.2s forwards;
  position: absolute;
  bottom: 0;
  left: 500px;
  @media (min-width: 1280px) {
    right: 20px;
  }
`