import { Moon, Sun } from 'lucide-react'
import { Activity } from 'react'
import { Button } from '@/components/Button/Button'
import { useTheme } from '@/providers/ThemeProvider/ThemeProvider'

export const Nav: React.FC = () => {
    const { setTheme, theme } = useTheme()

    return (
        <nav className='flex items-center justify-between px-12 py-8'>
            <h1 className='font-bold'>Neomorphism UI</h1>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                shape={'circle'}
                size='icon'
            >
                <Activity mode={theme === 'light' ? 'visible' : 'hidden'}>
                    <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-warning transition-all dark:-rotate-90 dark:scale-0' />
                </Activity>
                <Activity mode={theme === 'dark' ? 'visible' : 'hidden'}>
                    <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                </Activity>
            </Button>
        </nav>
    )
}
