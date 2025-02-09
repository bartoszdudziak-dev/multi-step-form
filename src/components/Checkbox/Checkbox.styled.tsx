import styled, { css } from 'styled-components';
import { CheckboxProps, StyledCheckboxProps } from './type';
import { FieldValues } from 'react-hook-form';

const ChebkboxCheckmark = styled.span<StyledCheckboxProps>`
    position: absolute;
    top: 0;
    left: 0;

    ${({ theme: { color, borderRadius, checkbox }, $variant }) => {
        const {
            checkmark: { width, height },
            boxShadow: { blur, distance },
        } = checkbox[$variant];
        const { background, primary, secondary, outline } = color;

        return css`
            background-color: ${background};
            width: ${width};
            height: ${height};
            border-radius: ${borderRadius.checkbox};
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
                display: block;
                width: ${width};
                max-width: 40%;
                height: ${height};
                max-height: 40%;
                background-color: ${outline};
                clip-path: polygon(20% 50%, 40% 70%, 80% 20%, 100% 40%, 40% 100%, 0% 60%);
                transition: all 0.2s ease-out;
            }
        `;
    }}
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
`;

const CheckboxContainer = styled.label<StyledCheckboxProps>`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: block;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-out;

    ${({ theme: { color, checkbox }, $variant }) => {
        const {
            fontSize,
            gap,
            boxShadow: { distance, blur },
            checkmark: { width },
        } = checkbox[$variant];
        const { text, primary, secondary, outline } = color;

        return css`
            color: ${outline};
            font-size: ${fontSize};
            padding-inline-start: calc(${width} + ${gap} * 3);

            &:hover {
                color: ${text};

                ${ChebkboxCheckmark} {
                    background-color: ${primary};
                }
            }

            &:has(${CheckboxInput}:checked) {
                color: ${text};
            }

            ${CheckboxInput}:checked, ${CheckboxInput}:active {
                ~ ${ChebkboxCheckmark} {
                    box-shadow:
                        inset ${distance} ${distance} ${blur} ${primary},
                        inset -${distance} -${distance} ${blur} ${secondary},
                        inset ${distance} -${distance} ${blur} ${outline};

                    &::after {
                        background-color: ${text};
                        max-width: 50%;
                        max-height: 50%;
                    }
                }
            }
        `;
    }}
`;

const StyledCheckbox = <T extends FieldValues>({
    id,
    label,
    variant = 'md',
    options,
    register,
    name,
}: CheckboxProps<T>) => {
    return (
        <CheckboxContainer $variant={variant} htmlFor={id}>
            {label}
            <CheckboxInput id={id} {...register(name, options)} />
            <ChebkboxCheckmark $variant={variant} />
        </CheckboxContainer>
    );
};

export { StyledCheckbox };
