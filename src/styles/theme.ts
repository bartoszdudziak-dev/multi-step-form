import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    fontFamily: 'Cursive, system-ui, Verdana, Arial, sans-serif',

    color: {
        primary: '#303030',
        secondary: '#454545',
        background: '#333333',
        outline: '#787878',
        text: '#e5e5e5',
        accent: '#EE6611',
    },

    borderRadius: {
        sm: '0.4rem',
        md: '0.5rem',
        lg: '0.6rem',
        full: '50%',
    },

    input: {
        sm: {
            boxShadow: { distance: '2px', blur: '2px' },
            fontSize: '0.875rem',
            padding: '0.4rem 0.8rem',
        },
        md: {
            boxShadow: { distance: '2px', blur: '2px' },
            fontSize: '1rem',
            padding: '0.5rem 1rem',
        },
        lg: {
            boxShadow: { distance: '2px', blur: '2px' },
            fontSize: '1.125rem',
            padding: '0.6rem 1.2rem',
        },
    },

    label: {
        sm: {
            fontSize: '0.875rem',
        },
        md: {
            fontSize: '1rem',
        },
        lg: {
            fontSize: '1.125rem',
        },
    },

    button: {
        sm: {
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            boxShadow: { distance: '2px', blur: '2px' },
        },
        md: {
            fontSize: '1.25rem',
            padding: '0.6rem 1.2rem',
            boxShadow: { distance: '3px', blur: '3px' },
        },
        lg: {
            fontSize: '1.5rem',
            padding: '0.7rem 1.4rem',
            boxShadow: { distance: '4px', blur: '4px' },
        },
    },
};

export { theme };
