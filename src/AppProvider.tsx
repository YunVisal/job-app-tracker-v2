import { type FC, type ReactNode } from "react"
import ReactQueryClientProvider from "./providers/ReactQueryClientProvider"
import AppThemeProvider from "./providers/AppThemeProvider"

interface AppProviderProp {
    children: ReactNode
}

const AppProvider: FC<AppProviderProp> = ({ children }) => {
    return <ReactQueryClientProvider>
        <AppThemeProvider>
            {children}
        </AppThemeProvider>
    </ReactQueryClientProvider>
}

export default AppProvider;