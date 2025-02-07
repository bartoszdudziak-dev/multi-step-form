import styled, { css } from 'styled-components';

const StyledMultiStepForm = styled.div`
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
                -${distance} -${distance} ${blur} ${secondary},
                ${distance} ${distance} ${blur} ${primary};
        `;
    }}
`;

export { StyledMultiStepForm };
