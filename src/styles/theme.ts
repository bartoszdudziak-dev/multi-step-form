import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    fontFamily: 'Monospace, Cursive, system-ui, Verdana, Arial, sans-serif',

    breakpoints: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
    },

    color: {
        primary: '#303030',
        secondary: '#454545',
        background: '#333333',
        outline: '#787878',
        text: '#e5e5e5',
        accent: '#aaaa1a',
    },

    borderRadius: {
        sm: '0.4rem',
        md: '0.5rem',
        lg: '0.6rem',
        full: '50%',
        checkbox: '4px',
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
            boxShadow: { distance: '2px', blur: '2px' },
        },
        lg: {
            fontSize: '1.5rem',
            padding: '0.7rem 1.4rem',
            boxShadow: { distance: '4px', blur: '4px' },
        },
    },

    checkbox: {
        sm: {
            fontSize: '0.875rem',
            gap: '0.25rem',
            checkmark: { height: '20px', width: '20px' },
            boxShadow: { distance: '1px', blur: '1px' },
        },
        md: {
            fontSize: '1rem',
            gap: '0.375rem',
            checkmark: { height: '24px', width: '24px' },
            boxShadow: { distance: '2px', blur: '2px' },
        },
        lg: {
            fontSize: '1.125rem',
            gap: '0.5rem',
            checkmark: { height: '28px', width: '28px' },
            boxShadow: { distance: '3px', blur: '3px' },
        },
    },

    radio: {
        sm: {
            fontSize: '0.875rem',
            gap: '0.25rem',
            checkmark: { height: '20px', width: '20px' },
            boxShadow: { distance: '1px', blur: '1px' },
        },
        md: {
            fontSize: '1rem',
            gap: '0.375rem',
            checkmark: { height: '24px', width: '24px' },
            boxShadow: { distance: '2px', blur: '2px' },
        },
        lg: {
            fontSize: '1.125rem',
            gap: '0.5rem',
            checkmark: { height: '28px', width: '28px' },
            boxShadow: { distance: '3px', blur: '3px' },
        },
    },

    card: {
        sm: {
            boxShadow: { distance: '4px', blur: '4px' },
        },
        md: {
            boxShadow: { distance: '6px', blur: '6px' },
        },
        lg: {
            boxShadow: { distance: '8px', blur: '8px' },
        },
    },
};

export { theme };
