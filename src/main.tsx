import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider'

// biome-ignore lint/style/noNonNullAssertion: Ignore
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='neomorphism'>
            <App />
        </ThemeProvider>
    </StrictMode>
)
