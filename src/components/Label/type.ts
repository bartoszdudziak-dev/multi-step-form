import { LabelHTMLAttributes } from 'react';
import { Variant } from 'styled-components';

export type LabelProps = {
    variant?: Variant;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type StyledLabelProps = {
    $variant: Variant;
};
