import styled, { css } from 'styled-components';
import { StyledLabelProps } from './type';

const BaseLabelStyle = css<StyledLabelProps>`
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

const StyledLabel = styled.label<StyledLabelProps>`
    ${BaseLabelStyle}
`;

const StyledCustomLabel = styled.span<StyledLabelProps>`
    display: block;
    ${BaseLabelStyle}
`;

export { StyledLabel, StyledCustomLabel };
