import styled, { css } from 'styled-components';
import { StyledButtonProps } from './type';

const StyledButton = styled.button<StyledButtonProps>`
    ${({
        theme: {
            color: { primary, secondary, outline },
            borderRadius,
            button,
        },
        $variant,
    }) => {
        const {
            boxShadow: { distance, blur },
            fontSize,
            padding,
        } = button[$variant];

        return css`
            box-shadow:
                ${distance} ${distance} ${blur} ${primary},
                -${distance} -${distance} ${blur} ${secondary};
            font-size: ${fontSize};
            border-radius: ${borderRadius[$variant]};
            padding: ${padding};
            transition: all 0.2s ease-out;

            &:focus-visible,
            &:active {
                outline: none;
                background-color: ${primary};
                box-shadow:
                    inset ${distance} ${distance} ${blur} ${primary},
                    inset -${distance} -${distance} ${blur} ${secondary},
                    inset ${distance} -${distance} ${blur} ${outline};
            }

            &:hover {
                background-color: ${primary};
                opacity: 0.75;
            }
        `;
    }}
`;

export { StyledButton };
