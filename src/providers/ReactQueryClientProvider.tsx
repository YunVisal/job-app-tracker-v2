import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode, type FC } from 'react'

interface ReactQueryClientProviderProp {
    children: ReactNode
}

const ReactQueryClientProvider: FC<ReactQueryClientProviderProp> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryClientProvider;