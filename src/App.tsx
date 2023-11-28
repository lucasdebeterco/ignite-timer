import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { Button } from './styles/components/Button.tsx'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </ThemeProvider>
    )
}
