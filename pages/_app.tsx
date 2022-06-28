import '../styles/globals.scss'

import { Sidebar } from '../components/Sidebar/Sidebar'
import { ThemeProvider } from '../context/themeContext'

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <div className='main'>
                <div className='main__sidebar'>
                    <Sidebar />
                </div>
                <div className='main__content'>
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp
