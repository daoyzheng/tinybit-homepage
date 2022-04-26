import { useContext, useEffect, useState } from "react"
import { ScrollContext } from "../context/ScrollContext"
import Logo from "../logo/Logo"
import { SettingsWrapper, SettingWrapper, TopbarWrapper } from "./Topbar.styled"

const Topbar = () => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [locale, setLocale] = useState('en')
  const { scrollY } = useContext(ScrollContext)
  useEffect(() => {
    setIsMinimize(scrollY > 160)
  }, [scrollY])
  return (
    <TopbarWrapper isMinimize={isMinimize}>
      <Logo className="cursor-pointer" />
      <div className="flex items-center gap-2">
        <SettingsWrapper className="flex items-center">
          <SettingWrapper
            isActive={locale == 'en'}
            isMinimize={isMinimize}
            contentOnMinimize="Eng"
            content="English"
            onClick={() => setLocale('en')}
          />
          <span className="text-xs text-white">/</span>
          <SettingWrapper
            isActive={locale == 'zh'}
            isMinimize={isMinimize}
            contentOnMinimize="中"
            content="中文"
            onClick={() => setLocale('zh')}
          />
        </SettingsWrapper>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar