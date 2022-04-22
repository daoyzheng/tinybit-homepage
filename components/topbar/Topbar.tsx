import { useEffect, useState } from "react"
import { SettingsWrapper, SettingWrapper, TopbarWrapper } from "./Topbar.styled"

const Topbar = () => {
  const [isMinimize, setIsMinimize] = useState(false)
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
      <div>Dao Zheng</div>
      <div className="flex items-center gap-2">
        <SettingsWrapper className="flex">
          <SettingWrapper isMinimize={isMinimize} contentOnMinimize="En" content="English"/>
          <span>/</span>
          <SettingWrapper isMinimize={isMinimize} contentOnMinimize="中" content="中文"/>
        </SettingsWrapper>
        <div>Light / Dark</div>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar