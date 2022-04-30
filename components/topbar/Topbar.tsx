import { useContext, useEffect, useState } from "react"
import { ScrollContext } from "../context/ScrollContext"
import Logo from "../logo/Logo"
import { SettingsWrapper, SettingWrapper, TopbarWrapper } from "./Topbar.styled"

interface Props {
  onLocaleChange: (locale: string) => void
}

const Topbar = ({ onLocaleChange }: Props) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [locale, setLocale] = useState('')
  const { scrollY } = useContext(ScrollContext)
  const handleLocaleChange = (localization: string) => {
    setLocale(localization)
    onLocaleChange(localization)
    localStorage.setItem('locale', localization)
  }
  useEffect(() => {
    setIsMinimize(scrollY > 160)
    const locale = localStorage.getItem('locale')
    if (locale) {
      setLocale(locale === 'zh' ? 'zh' : 'en')
      localStorage.setItem('locale', locale === 'zh' ? 'zh' : 'en')
    }
    else {
      setLocale('en')
      localStorage.setItem('locale', 'en')
    }
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
            onClick={() => handleLocaleChange('en')}
          />
          <span className="text-xs text-white">/</span>
          <SettingWrapper
            isActive={locale == 'zh'}
            isMinimize={isMinimize}
            contentOnMinimize="中"
            content="中文"
            onClick={() => handleLocaleChange('zh')}
          />
        </SettingsWrapper>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar