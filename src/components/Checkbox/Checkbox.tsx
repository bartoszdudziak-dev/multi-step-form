import { StyledCheckbox } from './Checkbox.styled';
import { CheckboxProps } from './type';

function Checkbox({ variant = 'md', id, label }: CheckboxProps) {
    return <StyledCheckbox variant={variant} id={id} label={label} />;
}

export default Checkbox;
