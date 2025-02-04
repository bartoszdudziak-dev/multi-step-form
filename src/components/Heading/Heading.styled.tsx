import styled from 'styled-components';

const H1 = styled.h1<{ $center: boolean }>`
    text-align: ${(props) => (props.$center ? 'center' : 'initial')};
    font-size: 2.25rem;
    font-weight: bold;
    color: inherit;
`;
const H2 = styled.h2<{ $center: boolean }>`
    text-align: ${(props) => (props.$center ? 'center' : 'initial')};
    font-size: 1.75rem;
    font-weight: bold;
    color: inherit;
`;
const H3 = styled.h3<{ $center: boolean }>`
    text-align: ${(props) => (props.$center ? 'center' : 'initial')};
    font-size: 1.5rem;
    font-weight: bold;
    color: inherit;
`;

export { H1, H2, H3 };
