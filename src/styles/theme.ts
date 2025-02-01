import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    fontFamily: 'Cursive, system-ui, Verdana, Arial, sans-serif',

    color: {
        primary: '#303030',
        secondary: '#454545',
        background: '#333333',
        text: '#e5e5e5',
        outline: 'rgba(229, 229, 229, 0.3)',
        accent: '#EE6611',
    },

    borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        full: '50%',
    },

    input: {
        sm: {
            boxShadow: { distance: '3px', blur: '3px' },
            fontSize: '1rem',
            padding: '0.5rem 1rem',
        },
        md: {
            boxShadow: { distance: '4px', blur: '4px' },
            fontSize: '1.25rem',
            padding: '0.75rem 1.25rem',
        },
        lg: {
            boxShadow: { distance: '5px', blur: '5px' },
            fontSize: '1.5rem',
            padding: '1rem 1.5rem',
        },
    },
};

export { theme };
