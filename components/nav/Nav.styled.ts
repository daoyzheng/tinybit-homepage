import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    bottom: 100%;
  }
  100% {
    bottom: 0%;
  }
`

const shiftRight = keyframes`
  0% {
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const NavWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  border-right: 1px solid var(--red);
  animation: ${fadeIn} 1s forwards;
  z-index: 1;
  > :first-child {
    display: flex;
    flex-direction: column;
    div, a {
      padding: 0 8px;
      margin: 5px 0;
      cursor: pointer;
      text-align: right;
      &:hover {
        background-color: var(--red)
      }
    }
  }
  > :nth-child(2) {
    width: fit-content;
    padding-bottom: 30px;
    > :first-child {
      margin: 15px 0px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.1s;
    }
    > :nth-child(2) {
      margin: 15px 0px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.2s;
    }
    > :nth-child(3) {
      margin: 15px 0px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.3s;
    }
  }
`

interface AProps {
  isSelected: boolean
}

export const A = styled.a<AProps>`
  background-color: ${props => props.isSelected ? 'var(--red)' : ''};
`
