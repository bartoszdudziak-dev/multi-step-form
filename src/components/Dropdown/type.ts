import { Variant } from 'styled-components';

export type DropdownItemProps = {
    name: string;
    value: string | number;
};

export type DropdownItemsProps = DropdownItemProps[];

export type DropdownProps = {
    items: DropdownItemsProps;
    placeholder?: string;
    onChoice?: (value: string | number) => void;
    variant?: Variant;
    style?: React.CSSProperties;
};
