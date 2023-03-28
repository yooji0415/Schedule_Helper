import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import Header from '@/components/Header'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
