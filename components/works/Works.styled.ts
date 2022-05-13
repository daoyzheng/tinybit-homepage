import styled, { css, keyframes } from "styled-components";

export const WorksWrapper = styled.div`
  margin-top: 150px;
`

export const WorksImageWrapper = styled.a`
  width: 100%;
  position: relative;
  box-shadow: 5px 5px 5px var(--grey), 10px 10px var(--red);
  color: #9f9f9f;
  cursor: pointer;
  overflow: hidden;
  * {
    transition: transform 300ms;
  }
  &:hover {
    ::after {
      opacity: 0;
    }
    * {
      transform: scale(1.02);
    }
  }
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--red);
    opacity: 0.2;
    transition: opacity 500ms;
  }
  @media (min-width: 768px) {
    width: 600px;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`


interface WorkWrapperProps {
  isAnimating: boolean
  animationDelay: number
}

export const WorkWrapper = styled.div<WorkWrapperProps>`
  opacity: 0;
  animation: ${props => props.isAnimating && css`${fadeIn} 600ms forwards ${props.animationDelay}s`};
`

export const WorksDescriptionWrapper = styled.div`
  width: 600px;
  > :nth-child(1) {
    font-size: 20px;
    width: fit-content;
    @media (min-width: 768px) {
      font-size: 1.8vw;
    }
    position: relative;
    cursor: pointer;
    border-bottom: 2px solid var(--red);
    margin-bottom: 15px;
  }
  > :nth-child(2) {
    display: flex;
    align-items: center;
    width: fit-content;
    flex-wrap: wrap;
    margin-top: 8px;
    div {
      font-size: 14px;
      color: var(--lightred);
      display: flex;
      line-height: 1px;
      white-space: nowrap;
      align-items: center;
      ::before {
        display: block;
        content: '';
        width: 5px;
        height: 5px;
        background-color: var(--red);
        margin-right: 10px;
      }
      @media (min-width: 1536px) {
        font-size: 0.9vw
      }
    }
  }
  > :nth-child(3) {
    font-size: 16px;
    @media (min-width: 1536px) {
      font-size: 1.1vw;
    }
  }
`