import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Variant } from 'styled-components';

export type ButtonProps = {
    children?: ReactNode;
    variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = {
    $variant: Variant;
};
