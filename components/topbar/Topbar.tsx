import { useEffect, useState } from "react"
import Logo from "../logo/Logo"
import { NameWrapper, SettingsWrapper, SettingWrapper, TopbarWrapper } from "./Topbar.styled"

const Topbar = () => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [locale, setLocale] = useState('en')
  useEffect(() => {
    setIsMinimize(window.scrollY > 160)
    const onScroll = () => {
      setIsMinimize(window.scrollY > 160)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [setIsMinimize])
  return (
    <TopbarWrapper isMinimize={isMinimize}>
      <Logo />
      <NameWrapper isMinimize={isMinimize}/>
      <div className="flex items-center gap-2">
        <SettingsWrapper className="flex items-center">
          <SettingWrapper
            isActive={locale == 'en'}
            isMinimize={isMinimize}
            contentOnMinimize="En"
            content="English"
            onClick={() => setLocale('en')}
          />
          <span className="text-xs">/</span>
          <SettingWrapper
            isActive={locale == 'zh'}
            isMinimize={isMinimize}
            contentOnMinimize="中"
            content="中文"
            onClick={() => setLocale('zh')}
          />
        </SettingsWrapper>
        <div>Light / Dark</div>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar