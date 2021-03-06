import styled, { keyframes } from "styled-components";
const shiftRight = keyframes`
  0% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const shiftLeft = keyframes`
  0% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 8px;
  font-size: 20px;
  letter-spacing: -2.0px;
  font-weight: 400;
  color: var(--red);
  &::before {
    content: "Dao";
    animation: ${shiftRight} 400ms;
  }
  &::after {
    content: "Zheng";
    margin-left: 25px;
    animation: ${shiftLeft} 400ms;
  }
`

const leftBorderFadeIn = keyframes`
  100% {
    border: 2px solid var(--red);
    border-top: none;
    border-right: none;
    height: 20px;
    width: 70px;
  }
`

const rightBorderFadeIn = keyframes`
  100% {
    border: 2px solid var(--red);
    border-bottom: none;
    border-left: none;
    height: 20px;
    width: 70px;
  }
`

const breathe = keyframes`
  50% {
    transform: scale(1.05);
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  animation: ${breathe} 5s infinite;
  animation-delay: 700ms;
  &::before {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: none;
    bottom: -12px;
    left: -3px;
    animation: ${leftBorderFadeIn} 600ms forwards;
    animation-delay: 200ms;
  }
  &::after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: none;
    top: -5px;
    right: -5px;
    animation: ${rightBorderFadeIn} 600ms forwards;
    animation-delay: 200ms;
  }
`