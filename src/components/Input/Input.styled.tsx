import styled, { css } from 'styled-components';
import { InputProps } from './type';

const StyledInput = styled.input<InputProps>`
    ${({
        theme: {
            color: { primary, secondary, outline },
            borderRadius,
            input,
        },
        size = 'md',
    }) => {
        const {
            boxShadow: { distance, blur },
            fontSize,
            padding,
        } = input[size];

        return css`
            box-shadow:
                inset ${distance} ${distance} ${blur} ${primary},
                inset -${distance} -${distance} ${blur} ${secondary};
            font-size: ${fontSize};
            border-radius: ${borderRadius[size]};
            padding: ${padding};

            &:focus-within {
                outline: none;
                box-shadow:
                    inset ${distance} ${distance} ${blur} ${primary},
                    inset -${distance} -${distance} ${blur} ${outline};
            }
        `;
    }}
`;

export { StyledInput };
