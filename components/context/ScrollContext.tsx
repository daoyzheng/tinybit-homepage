import { createContext, useCallback, useEffect, useState } from "react"

interface IScrollContext {
  scrollY: number
  viewportHeight: number
  viewportWidth: number
}

const ScrollContext = createContext<IScrollContext>({scrollY: 0, viewportHeight: 0, viewportWidth: 0 })

const ScrollContextProvider: React.FC = ({ children }) => {
  const [scrollValue, setScrollValue] = useState({ scrollY: 0, viewportHeight: 0, viewportWidth: 0})
  const onScroll = useCallback(() => {
    setScrollValue({
      scrollY: window.scrollY,
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth
    })
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  return (
    <ScrollContext.Provider value={scrollValue}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollContextProvider }