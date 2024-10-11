import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '../config'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config as any}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp
