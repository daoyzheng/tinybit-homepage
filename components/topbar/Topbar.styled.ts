import styled, { keyframes } from "styled-components";

interface TopbarWrapperProps {
  isMinimize: boolean
}

export const TopbarWrapper = styled.div<TopbarWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: blue;
  padding: ${props => props.isMinimize ? '12px 15px' : '20px 15px'};
  transition: padding 400ms;
`

interface SettingWrapperProps {
  content: string
  contentOnMinimize: string
  isMinimize: boolean
}

export const SettingWrapper = styled.span<SettingWrapperProps>`
  &::after {
    content: "${props => props.content}";
    opacity: ${props => props.isMinimize ? '0' : '1'};
    transition: opacity 400ms;
    margin-left: -50px;
  }
  &::before {
    content: "${props => props.contentOnMinimize}";
    opacity: ${props => props.isMinimize ? '1' : '0'};
    transition: opacity 400ms;
  }
`
