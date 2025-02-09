import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Variant } from 'styled-components';

export type CheckboxProps<T extends FieldValues> = {
    variant: Variant;
    label: string;
    id: string;
    name: Path<T>;
    options: RegisterOptions<T, Path<T>>;
    register: UseFormRegister<T>;
};

export type StyledCheckboxProps = {
    $variant: Variant;
};
