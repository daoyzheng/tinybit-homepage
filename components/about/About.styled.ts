import styled, { css, keyframes } from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: 150px;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
interface AboutContentWrapperProps {
  isAnimating: boolean
  animationDelay: number
}
export const AboutContentWrapper = styled.div<AboutContentWrapperProps>`
  opacity: 0;
  font-size: 16px;
  line-height: 30px;
  animation: ${props => props.isAnimating && css`${fadeIn} 600ms forwards ${props.animationDelay}s`};
`

export const TextHighlight = styled.span`
  color: var(--lightred);
  font-weight: 700;
`

export const TechnologiesWrapper = styled.div`

`

export const TechnologyCategoryItem = styled.div`
  font-size: 15px;
  margin-left: 16px;
  > :first-child {
    width: fit-content;
    padding-bottom: 1px;
    margin-bottom: 1px;
    border-bottom: 1px solid var(--red);
  }
  > :nth-child(2) {
    margin-left: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    div {
      margin-right: 15px;
      display: flex;
      align-items: center;
      ::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        margin-right: 5px;
        background-color: var(--red);
      }
    }
  }
`