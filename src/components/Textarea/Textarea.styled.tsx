import styled, { css } from 'styled-components';

const StyledTextarea = styled.textarea`
    ${({
        theme: {
            color: { primary, secondary, outline },
            borderRadius,
            input,
        },
    }) => {
        const {
            boxShadow: { distance, blur },
            fontSize,
        } = input['md'];

        return css`
            min-height: 7rem;
            box-shadow:
                inset ${distance} ${distance} ${blur} ${primary},
                inset -${distance} -${distance} ${blur} ${secondary};
            font-size: ${fontSize};
            border-radius: ${borderRadius['md']};
            padding: 1rem;
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

export { StyledTextarea };
