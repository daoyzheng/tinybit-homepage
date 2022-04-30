import { createContext } from "react"

const LocaleContext = createContext<string>('en')

interface Props {
  locale: string
}

const LocaleContextProvider: React.FC<Props> = ({ children, locale }) => {
  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  )
}

export { LocaleContext, LocaleContextProvider }