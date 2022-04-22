import styled, { keyframes } from "styled-components";

const typewritter = keyframes`
  to {
    left: 100%;
  }
`

export const IntroWrapper = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 3.5vw;
  h1 {
    position: relative;
    width: fit-content;
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
      animation: ${typewritter} 2s steps(17) forwards;
    }
  }
  h1:nth-child(2) {
    font-size: 10vw;
    font-weight: bold;
    color: var(--red);
    ::before {
      animation: ${typewritter} 1s steps(9) 2s forwards;
    }
  }
  h1:nth-child(3) {
    ::before {
      animation: ${typewritter} 2s steps(24) 3s forwards;
    }
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