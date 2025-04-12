import styled, { css } from 'styled-components';

const StyledMultiStepForm = styled.div`
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    width: min(90%, 60em);
    margin-block: 1rem;
    margin-inline: auto;

    ${({
        theme: {
            card,
            color: { primary, secondary },
            breakpoints: { md },
        },
    }) => {
        const {
            boxShadow: { blur, distance },
        } = card['md'];

        return css`
            box-shadow:
                -${distance} -${distance} ${blur} ${secondary},
                ${distance} ${distance} ${blur} ${primary};

            @media (width >= ${md}) {
                padding: 2.5rem 5rem;
            }
        `;
    }}
`;

export { StyledMultiStepForm };
