import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const ResetStyle = styled.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
    }

    body {
        min-height: 100vh;
    }

    img,
    picture,
    svg,
    video {
        display: block;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }
`;

export default ResetStyle;
