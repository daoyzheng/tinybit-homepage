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
    transform: none;
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
    div {
      padding: 0 8px;
      margin: 5px 0;
      text-align: right;
      cursor: pointer;
      transition: background-color 500ms;
      &:hover {
        background-color: var(--red);
      }
      font-size: 16px;
      @media (min-width: 1280px) {
        font-size: 1vw;
      }
    }
  }
  > :nth-child(2) {
    height: fit-content;
    width: fit-content;
    bottom: 60px;
    padding-bottom: 30px;
    margin-right: 10px;
    > :first-child {
      margin: 10px 0px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.1s;
    }
    > :nth-child(2) {
      margin: 10px 0px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.2s;
    }
    > :nth-child(3) {
      margin: 10px 0px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.3s;
    }
    > :nth-child(4) {
      margin-top: 10px;
      opacity: 0;
      animation: ${shiftRight} 400ms forwards 1.4s;
    }
  }
`

interface NavItemWrapper {
  isSelected: boolean
}

export const NavItemWrapper = styled.div<NavItemWrapper>`
  background-color: ${props => props.isSelected ? 'var(--red)' : ''};
`
