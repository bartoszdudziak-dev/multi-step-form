import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Variant } from 'styled-components';

export type RadioProps<T extends FieldValues> = {
    variant: Variant;
    label: string;
    name: Path<T>;
    value: string;
    id: string;
    options?: RegisterOptions<T, Path<T>>;
    register: UseFormRegister<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export type StyledRadioProps = {
    $variant: Variant;
} & InputHTMLAttributes<HTMLInputElement>;
