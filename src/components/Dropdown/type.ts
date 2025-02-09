import { Variant } from 'styled-components';


export type DropdownValue = number | string;

export type DropdownItemProps = {
    name: string;
    value: DropdownValue;
};

export type DropdownItemsProps = DropdownItemProps[];

export type DropdownProps = {
    variant?: Variant;
    placeholder?: string;
    items: DropdownItemsProps;
    style?: React.CSSProperties;
    value: DropdownValue;
    onChoice: (value: DropdownValue) => void;
};
