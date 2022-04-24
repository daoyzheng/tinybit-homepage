import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`

export const NavWrapper = styled.div`
  position: fixed;
  padding: 0 10px;
  top: 20%;
  left: 10%;
  border-right: 1px solid var(--red);
  animation: ${fadeIn} 2s forwards;
  div, a{
    cursor: pointer;
    text-align: right;
    &:hover {
      background-color: var(--red)
    }
  }
`