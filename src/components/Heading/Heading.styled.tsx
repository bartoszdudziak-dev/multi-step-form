import styled, { css } from 'styled-components';

const HeadingBaseStyle = css`
    font-weight: bold;
    color: inherit;
    text-transform: uppercase;
    letter-spacing: 4px;
`;

const H1 = styled.h1<{ $center: boolean }>`
    text-align: ${(props) => (props.$center ? 'center' : 'initial')};
    font-size: 2.25rem;
    ${HeadingBaseStyle}
`;
const H2 = styled.h2<{ $center: boolean }>`
    text-align: ${(props) => (props.$center ? 'center' : 'initial')};
    font-size: 1.75rem;
    ${HeadingBaseStyle}
`;
const H3 = styled.h3<{ $center: boolean }>`
    text-align: ${(props) => (props.$center ? 'center' : 'initial')};
    font-size: 1.5rem;
    ${HeadingBaseStyle}
`;

export { H1, H2, H3 };
