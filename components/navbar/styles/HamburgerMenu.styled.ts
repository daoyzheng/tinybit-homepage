import styled from "styled-components";

export const NavbarButton = styled.div`
  border: 1px solid red;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  &:hover {
    background-color: red;
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
  }
`
