import { route } from "next/dist/server/router"
import { useRouter } from "next/router"
import path from "path"
import { createContext, useContext, useEffect, useState } from "react"
import { ScrollContext } from "../context/ScrollContext"
import Logo from "../logo/Logo"
import { SettingsWrapper, SettingWrapper, TopbarWrapper } from "./Topbar.styled"

interface Props {
  onLocaleChange: (locale: string) => void
}

const Topbar = ({ onLocaleChange }: Props) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [locale, setLocale] = useState('en')
  const router = useRouter()
  const { scrollY } = useContext(ScrollContext)
  const handleLocaleChange = (localization: string) => {
    setLocale(localization)
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: localization })
    onLocaleChange(localization)
  }
  useEffect(() => {
    setIsMinimize(scrollY > 160)
    const localization = router.locale
    setLocale(localization === 'en' ? 'en' : 'zh')
  }, [scrollY, router])
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