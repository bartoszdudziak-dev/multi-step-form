import { StyledInput } from './Input.styled';
import { InputProps } from './type';

function Input({ size = 'md' }: InputProps) {
    return <StyledInput size={size} />;
}

export default Input;
