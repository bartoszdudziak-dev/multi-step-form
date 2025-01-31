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

    input {
        border: none;
        background-color: inherit;
    }
`;

export default GlobalStyles;
