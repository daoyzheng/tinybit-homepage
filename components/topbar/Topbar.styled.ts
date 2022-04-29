import styled from "styled-components";

interface TopbarWrapperProps {
  isMinimize: boolean
}

export const TopbarWrapper = styled.div<TopbarWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  right: 0;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: ${props => props.isMinimize ? '0 2px 4px -1px' : ''};
  padding: ${props => props.isMinimize ? '16px 20px' : '20px 20px'};
  transition: padding 500ms;
  font-size: 16px;
  @media (min-width: 1280px) {
    font-size: 1vw;
  }
`

interface SettingWrapperProps {
  content: string
  contentOnMinimize: string
  isMinimize: boolean
  isActive: boolean
}

export const SettingWrapper = styled.span<SettingWrapperProps>`
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.isActive ? 'var(--red)' : 'white'};
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
  font-size: 16px;
  @media (min-width: 1280px) {
    font-size: 1vw;
  }
  span:first-child {
    ::after {
      margin-right: 5px;
    }
    ::before {
      margin-right: -40px;
    }
  }
  span:nth-child(2) {
    font-size: 16px;
    @media (min-width: 1280px) {
      font-size: 1vw;
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