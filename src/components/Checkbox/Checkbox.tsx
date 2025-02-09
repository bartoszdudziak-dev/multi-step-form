import { FieldValues } from 'react-hook-form';
import { StyledCheckbox } from './Checkbox.styled';
import { CheckboxProps } from './type';

function Checkbox<T extends FieldValues>({
    variant = 'md',
    id,
    label,
    register,
    options,
    name,
}: CheckboxProps<T>) {
    return (
        <StyledCheckbox
            variant={variant}
            id={id}
            label={label}
            register={register}
            options={options}
            name={name}
        />
    );
}

export default Checkbox;
