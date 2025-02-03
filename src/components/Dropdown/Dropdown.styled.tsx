import styled, { css, Variant } from 'styled-components';

const ListItem = styled.li<{ $isActive: boolean }>`
    padding: 0.25rem 0.5rem;
    width: 100%;
    text-align: center;
    transition: all 0.2s ease-out;
    cursor: pointer;

    ${({
        theme: {
            color: { outline, secondary, text },
        },
        $isActive,
    }) => {
        return css`
            color: ${outline};

            &:hover {
                color: ${text};
                background-color: ${secondary};
            }

            ${$isActive &&
            css`
                pointer-events: none;
                color: ${text};
                background-color: ${secondary};
            `}
        `;
    }}
`;

const List = styled.ul<{ $isOpen: boolean; $variant: Variant }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    transform-origin: top;
    max-height: ${({ $isOpen }) => ($isOpen ? '12rem' : '0')};
    transform: ${({ $isOpen }) => ($isOpen ? 'scaleY(1)' : 'scaleY(0)')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    overflow-y: auto;

    transition:
        transform 0.2s ease-out,
        max-height 0.2s ease-out,
        opacity 0.1s ease-out;

    &::-webkit-scrollbar {
        display: none;
    }

    ${({
        theme: {
            input,
            borderRadius,
            color: { primary, secondary },
        },
        $variant,
    }) => {
        const {
            boxShadow: { blur, distance },
            fontSize,
        } = input[$variant];

        return css`
            border-bottom-right-radius: ${borderRadius[$variant]};
            border-bottom-left-radius: ${borderRadius[$variant]};
            font-size: ${fontSize};
            box-shadow:
                inset -${distance} -${distance} ${blur} ${secondary},
                inset ${distance} ${distance} ${blur} ${primary};
        `;
    }}
`;

const StyledDropdown = styled.div<{ $variant: Variant }>`
    position: relative;
`;

export { StyledDropdown, List, ListItem };
