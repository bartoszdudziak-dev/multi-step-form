import { Variant } from 'styled-components';

export type RadioProps = {
    variant: Variant;
    label?: string;
    name?: string;
    value?: string;
    id?: string;
};

export type StyledRadioProps = {
    $variant: Variant;
};
