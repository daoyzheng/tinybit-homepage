import { useEffect, useState } from "react"
import { SettingWrapper, TopbarWrapper } from "./Topbar.styled"

const Topbar = () => {
  const [isMinimize, setIsMinimize] = useState(false)
  useEffect(() => {
    setIsMinimize(window.scrollY > 160)
    const onScroll = () => {
      console.log('scrolled', window.scrollY)
      setIsMinimize(window.scrollY > 160)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [setIsMinimize])
  return (
    <TopbarWrapper isMinimize={isMinimize}>
      <div>Dao Zheng</div>
      <div className="flex items-center gap-4">
        <div className="space-x-1">
          <SettingWrapper isMinimize={isMinimize} contentOnMinimize="En" content="English"/>
          <span>/</span>
          {/* <SettingWrapper content={isMinimize ? '中' : '中文'}/> */}
        </div>
        <div>Light / Dark</div>
      </div>
    </TopbarWrapper>
  )
}

export default Topbar