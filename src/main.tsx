import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';

import ResetStyle from './styles/ResetStyle.ts';
import GlobalStyles from './styles/GlobalStyles.ts';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </StrictMode>,
);
