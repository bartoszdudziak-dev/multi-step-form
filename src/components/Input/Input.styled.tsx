import styled, { css } from 'styled-components';
import { StyledInputProps } from './type';

const StyledInput = styled.input<StyledInputProps>`
    ${({
        theme: {
            color: { primary, secondary, outline },
            borderRadius,
            input,
        },
        $variant,
    }) => {
        const {
            boxShadow: { distance, blur },
            fontSize,
            padding,
        } = input[$variant];

        return css`
            box-shadow:
                inset ${distance} ${distance} ${blur} ${primary},
                inset -${distance} -${distance} ${blur} ${secondary};
            font-size: ${fontSize};
            border-radius: ${borderRadius[$variant]};
            padding: ${padding};
            transition: all 0.2s ease-out;

            &:focus-within {
                outline: none;
                background-color: ${primary};
                box-shadow:
                    inset ${distance} ${distance} ${blur} ${primary},
                    inset -${distance} -${distance} ${blur} ${outline};
            }

            &:hover {
                background-color: ${primary};
            }
        `;
    }}
`;

export { StyledInput };
