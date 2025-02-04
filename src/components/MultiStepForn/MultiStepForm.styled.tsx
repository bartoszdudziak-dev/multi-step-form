import styled, { css } from 'styled-components';

const StyledMultiStepForm = styled.form`
    padding: 2.5rem 5rem;
    border-radius: 1rem;
    max-width: 60em;
    margin-inline: auto;

    ${({
        theme: {
            card,
            color: { primary, secondary },
        },
    }) => {
        const {
            boxShadow: { blur, distance },
        } = card['md'];

        return css`
            box-shadow:
                inset -${distance} -${distance} ${blur} ${secondary},
                inset ${distance} ${distance} ${blur} ${primary};
        `;
    }}
`;

export { StyledMultiStepForm };
