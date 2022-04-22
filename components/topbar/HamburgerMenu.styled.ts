import styled, { keyframes } from "styled-components";

const shiftRight = keyframes`
  50% {
    transform: translateX(0px);
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
  >:first-child {
    transform: translateX(-3px);
  }
  >:last-child {
    transform: translateX(-6px);
  }
`

export const HamburgerIconLine = styled.span`
  width: 15px;
  height: 2px;
  background-color: blue;
`

export const NavbarButton = styled.div`
  border: 1px solid red;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  &:hover {
    background-color: red;
    border-radius: 3px;
    span:first-child {
      animation: ${shiftRight} 300ms;
    }
    span:last-child {
      animation: ${shiftRight} 500ms;
    }
  }
`

export const MenuWrapper = styled.div`
  position: relative;
`

export const Menu = styled.div<{ show: boolean }>`
  position: absolute;
  top: 42px;
  width: 200px;
  right: 0;
  background-color: orange;
  border-radius: 3px;
  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(20px)'};
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? '' : 'hidden'};
`

export const MenuItem = styled.div`
  padding: 2px 10px;
  cursor: pointer;
  &:hover {
    background-color: yellowgreen;
    border-radius: 3px;
  }
`
