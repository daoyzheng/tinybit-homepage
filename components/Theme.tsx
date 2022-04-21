import { ThemeProvider } from "styled-components"
import { THEME } from "../lib/constants"
import { darkTheme, lightTheme } from "../lib/themes"

interface Props {
  theme: string
}

const Theme: React.FC<Props> = ({ children, theme }) => {
  const getTheme = () => {
    switch(theme)     {
      case THEME.light:
        return lightTheme
      case THEME.dark:
        return darkTheme
    }
  }
  return (
    <ThemeProvider theme={getTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme