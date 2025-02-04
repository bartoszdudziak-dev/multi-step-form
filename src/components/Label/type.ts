import { LabelHTMLAttributes, ReactNode } from 'react';
import { Variant } from 'styled-components';

export type LabelProps = {
    variant?: Variant;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type CustomLabelProps = {
    children: ReactNode;
    variant?: Variant;
};

export type StyledLabelProps = {
    $variant: Variant;
};
