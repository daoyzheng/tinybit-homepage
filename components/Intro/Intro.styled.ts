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
  font-size: 3.5vw;
  h1 {
    position: relative;
    width: fit-content;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      width: 2px;
      background-color: orange;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--black);
    }
  }
  h1:first-child {
    ::before {
      animation: ${typewritter} 2s steps(17) .7s forwards;
    }
    ::after {
      animation:
        ${cursor} 2s steps(17) .7s,
        ${blink} 1s steps(17) infinite;
    }
  }
  h1:nth-child(2) {
    font-size: 10vw;
    font-weight: bold;
    color: var(--red);
    ::before {
      animation: ${typewritter} 1.5s steps(9) 3s forwards;
    }
    ::after {
      height: 0;
      animation:
        ${cursor} 1.5s steps(9) 3s,
        ${blink} 1s steps(9) infinite;
    }
  }
  & > :nth-child(3) {
    transform: translateY(10px);
    opacity: 0;
    animation: ${fadeIn} 0.8s ease 4.6s forwards;
  }
  @media (min-width: 768px) {
    h1 {
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

const doubleClick = keyframes`
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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
  animation: ${fadeIn} 0.8s ease 5.3s forwards, ${scale} .5s ease 6.3s forwards;
  position: absolute;
  bottom: 0;
  right: -30px;
  ::before {
    position: absolute;
    content: "";
    top: 18px;
    left: 15px;
    width: 2px;
    height: 2px;
    box-shadow: 0 0 3px 3px var(--red);
    border-radius: 100px;
    background-color: var(--red);
    opacity: 0;
    animation: ${doubleClick} .5s ease 6.3s forwards;
  }
`