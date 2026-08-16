import { type FC, type ReactNode } from "react"
import ReactQueryClientProvider from "./providers/ReactQueryClientProvider"

interface AppProviderProp {
    children: ReactNode
}

const AppProvider: FC<AppProviderProp> = ({ children }) => {
    return <ReactQueryClientProvider>
        {children}
    </ReactQueryClientProvider>
}

export default AppProvider;