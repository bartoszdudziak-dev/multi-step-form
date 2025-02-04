import styled, { css } from 'styled-components';

const StyledMultiStepForm = styled.div`
    padding: 3.5rem 5rem;

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
