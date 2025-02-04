import styled, { css } from 'styled-components';
import { RadioProps, StyledRadioProps } from './type';

const RadioCheckmark = styled.span<StyledRadioProps>`
    position: absolute;
    top: 0;
    left: 0;

    ${({ theme: { color, borderRadius, radio }, $variant }) => {
        const {
            checkmark: { width, height },
            boxShadow: { blur, distance },
        } = radio[$variant];
        const { background, primary, secondary, outline } = color;

        return css`
            background-color: ${background};
            width: ${width};
            height: ${height};
            border-radius: ${borderRadius.full};
            box-shadow:
                -${distance} -${distance} ${blur} ${secondary},
                ${distance} ${distance} ${blur} ${primary};
            transition: all 0.2s ease-out;

            &::after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: inherit;
                display: block;
                width: ${width};
                max-width: 35%;
                height: ${height};
                max-height: 35%;
                background-color: ${outline};
                transition: all 0.2s ease-out;
            }
        `;
    }}
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
`;

const RadioContainer = styled.label<StyledRadioProps>`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: block;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-out;

    ${({ theme: { color, radio }, $variant }) => {
        const {
            fontSize,
            gap,
            boxShadow: { distance, blur },
            checkmark: { width },
        } = radio[$variant];
        const { text, primary, secondary, outline } = color;

        return css`
            color: ${outline};
            font-size: ${fontSize};
            padding-inline-start: calc(${width} + ${gap} * 3);

            &:hover {
                color: ${text};

                ${RadioCheckmark} {
                    background-color: ${primary};
                }
            }

            &:has(${RadioInput}:checked) {
                color: ${text};
            }

            ${RadioInput}:checked, ${RadioInput}:active {
                ~ ${RadioCheckmark} {
                    box-shadow:
                        inset ${distance} ${distance} ${blur} ${primary},
                        inset -${distance} -${distance} ${blur} ${secondary},
                        inset ${distance} -${distance} ${blur} ${outline};

                    &::after {
                        background-color: ${text};
                        max-width: 40%;
                        max-height: 40%;
                    }
                }
            }
        `;
    }}
`;

const StyledRadio = ({ id, label, variant = 'md', name, value }: RadioProps) => {
    return (
        <RadioContainer $variant={variant} htmlFor={id}>
            {label}
            <RadioInput id={id} name={name} value={value} />
            <RadioCheckmark $variant={variant} />
        </RadioContainer>
    );
};

export { StyledRadio };
