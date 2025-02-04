import { createGlobalStyle, css } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
    body {
        ${({
            theme: {
                fontFamily,
                color: { background, text },
            },
        }) => css`
            font-family: ${fontFamily};
            background-color: ${background};
            color: ${text};
        `}
    }

    input,
    button {
        border: none;
        background-color: inherit;
    }

    button {
        cursor: pointer;
    }

    textarea {
        background-color: inherit;
        border: none;
    }
`;

export default GlobalStyles;
