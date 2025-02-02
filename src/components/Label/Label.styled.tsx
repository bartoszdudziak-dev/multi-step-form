import styled, { css } from 'styled-components';
import { StyledLabelProps } from './type';

const StyledLabel = styled.label<StyledLabelProps>`
    ${({
        theme: {
            color: { text },
            label,
        },
        $variant,
    }) => {
        const { fontSize } = label[$variant];

        return css`
            width: fit-content;
            font-size: ${fontSize};
            color: ${text};
        `;
    }}
`;

export { StyledLabel };
