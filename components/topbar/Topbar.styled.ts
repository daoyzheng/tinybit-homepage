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
  padding: ${props => props.isMinimize ? '10px 15px' : '20px 15px'};
  transition: padding 400ms;
`

interface SettingWrapperProps {
  content: string
  contentOnMinimize: string
  isMinimize: boolean
}

export const SettingWrapper = styled.span<SettingWrapperProps>`
  &::after {
    display: inline;
    content: "${props => props.content}";
    opacity: ${props => props.isMinimize ? '0' : '1'};
    transition: opacity 400ms;
  }
  &::before {
    display: inline;
    content: "${props => props.contentOnMinimize}";
    opacity: ${props => props.isMinimize ? '1' : '0'};
    transition: opacity 400ms;
  }
`

export const SettingsWrapper = styled.div`
  span:first-child {
    ::after {
      margin-right: 5px;
    }
    ::before {
      margin-right: -50px;
    }
  }
  span:last-child {
    ::after {
      margin-left: -15px;
    }
    ::before {
      margin-left: 5px;
    }
  }
`
