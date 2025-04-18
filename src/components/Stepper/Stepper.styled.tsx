import styled, { css } from 'styled-components';
import { StyledStepProp } from './type';

const ProgressBar = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    height: 0.5rem;
    width: 100%;

    ${({
        theme: {
            color: { primary, secondary },
            button,
            breakpoints: { md },
        },
    }) => {
        const {
            boxShadow: { blur, distance },
        } = button['md'];

        return css`
            box-shadow:
                ${distance} ${distance} ${blur} ${secondary},
                -${distance} -${distance} ${blur} ${primary};

            @media (width >= ${md}) {
                height: 1rem;
            }
        `;
    }}
`;

const StyledStep = styled.div<StyledStepProp>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s linear;

    ${({
        theme: {
            breakpoints: { md },
            borderRadius,
            color: { primary, secondary, background, outline, text },
            button,
        },
        $isActive,
        $isDone,
    }) => {
        const {
            boxShadow: { blur, distance },
            fontSize,
        } = button['md'];

        return css`
            box-shadow:
                ${distance} ${distance} ${blur} ${secondary},
                -${distance} -${distance} ${blur} ${primary};

            box-shadow: ${($isDone || $isActive) &&
            ` ${distance} ${distance} ${blur} ${secondary},
                 ${distance} ${distance} ${blur} ${primary}`};

            background-color: ${background};
            background-color: ${$isDone && `${secondary}`};
            background-color: ${$isActive && `${outline}`};

            color: ${outline};
            color: ${($isDone || $isActive) && `${text}`};

            width: calc(1.5 * ${fontSize});
            height: calc(1.5 * ${fontSize});
            font-size: 0.75 * ${fontSize};

            border-radius: ${borderRadius['full']};

            @media (width >= ${md}) {
                width: calc(2.5 * ${fontSize});
                height: calc(2.5 * ${fontSize});
                font-size: ${fontSize};
            }
        `;
    }}
`;

const Progress = styled.div<{ $width: string }>`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    z-index: -1;
    height: 40%;

    background-color: ${(props) => props.theme.color.outline};
    width: ${(props) => props.$width};

    transition: width 0.5s linear;
`;

const StyledStepper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { StyledStepper, StyledStep, ProgressBar, Progress };
