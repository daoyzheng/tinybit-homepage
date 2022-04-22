import styled, { keyframes } from "styled-components";

interface TopbarWrapperProps {
  isMinimize: boolean
}

export const TopbarWrapper = styled.div<TopbarWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(0.8px);
  right: 0;
  left: 0;
  top: 0;
  background-color: rgb(240,124,93, 0.75);
  box-shadow: ${props => props.isMinimize ? '0 1px 4px -1px' : ''};
  padding: ${props => props.isMinimize ? '10px 15px' : '20px 15px'};
  transition: padding 500ms;
`

interface SettingWrapperProps {
  content: string
  contentOnMinimize: string
  isMinimize: boolean
  isActive: boolean
}

export const SettingWrapper = styled.span<SettingWrapperProps>`
  cursor: pointer;
  font-size: 12px;
  /* font-weight: bold; */
  color: ${props => props.isActive ? 'red' : 'black'};
  &::after {
    display: inline;
    content: "${props => props.content}";
    opacity: ${props => props.isMinimize ? '0' : '1'};
    transition: opacity 500ms;
  }
  &::before {
    display: inline;
    content: "${props => props.contentOnMinimize}";
    opacity: ${props => props.isMinimize ? '1' : '0'};
    transition: opacity 500ms;
  }
`

export const SettingsWrapper = styled.div`
  span:first-child {
    ::after {
      margin-right: 5px;
    }
    ::before {
      margin-right: -40px;
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