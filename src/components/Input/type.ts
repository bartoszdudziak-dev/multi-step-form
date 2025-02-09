import { InputHTMLAttributes } from 'react';
import { Variant } from 'styled-components';

export type InputProps = {
    variant?: Variant;
} & InputHTMLAttributes<HTMLInputElement>;

export type StyledInputProps = {
    $variant: Variant;
} & InputHTMLAttributes<HTMLInputElement>;
