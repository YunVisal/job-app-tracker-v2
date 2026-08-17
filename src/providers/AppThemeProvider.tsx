import { ThemeProvider } from "@mui/material"
import { type FC, type ReactNode } from "react"
import AppTheme from "../AppTheme"

interface AppThemeProviderProp {
    children: ReactNode
}

const AppThemeProvider: FC<AppThemeProviderProp> = ({ children }) => {
    return <ThemeProvider theme={AppTheme}>
        {children}
    </ThemeProvider>
}

export default AppThemeProvider;