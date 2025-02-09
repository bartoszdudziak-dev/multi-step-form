import { FieldValues } from 'react-hook-form';
import { StyledRadio } from './Radio.styled';
import { RadioProps } from './type';

function Radio<T extends FieldValues>({
    variant,
    label,
    id,
    name,
    value,
    register,
    options,
}: RadioProps<T>) {
    return (
        <StyledRadio
            variant={variant}
            label={label}
            id={id}
            name={name}
            value={value}
            options={options}
            register={register}
        />
    );
}

export default Radio;
