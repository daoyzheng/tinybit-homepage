import styled, { keyframes } from "styled-components";

interface IconWrapperProps {
  content: string
  isHorizontal?: boolean
}

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`

export const IconWrapper = styled.div<IconWrapperProps>`
  width: fit-content;
  position: relative;
  transition: transform 200ms;
  font-size: 16px;
  @media (min-width: 1280px) {
    font-size: 1vw;
  }
  :hover {
    transform: scale(1.1);
    ::before {
      opacity: 0;
      animation: ${fadeIn} 500ms forwards;
      content: '${props => props.content}';
      padding: 2px 5px;
      border-radius: 5px;
      position: absolute;
      right: ${props => props.isHorizontal ? '40px' : ''};
      left: ${props => props.isHorizontal ? '' : '50%'};
      top: ${props => props.isHorizontal ? '50%' : '50px'};
      transform: ${props => props.isHorizontal ? 'translateY(-50%)' : 'translateX(-50%)'};
      width: fit-content;
      white-space: nowrap;
      color: lightgray;
      background-color: #525252;
    }
  }
`