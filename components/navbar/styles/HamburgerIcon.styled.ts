import styled, { keyframes } from "styled-components";

const shiftLeft = keyframes`
  50% {
    transform: translateX(-5px);
  }
`

const shiftRight = keyframes`
  50% {
    transform: translateX(8px);
  }
`

export const HamburgerIconWrapper = styled.div`
  width: 15px;
  height: 11.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  &:hover {
    div:first-child {
      animation: ${shiftLeft} 500ms;
    }
    div:last-child {
      animation: ${shiftRight} 500ms;
    }
  }
`

export const HamburgerIconLine = styled.div`
  width: 15px;
  height: 2px;
  background-color: blue;
`
