import { StyledInput } from './Input.styled';
import { InputProps } from './type';

function Input({ variant = 'md', ...rest }: InputProps) {
    return <StyledInput $variant={variant} {...rest} />;
}

export default Input;
