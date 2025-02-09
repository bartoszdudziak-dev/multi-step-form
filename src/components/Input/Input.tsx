import { forwardRef } from 'react';
import { StyledInput } from './Input.styled';
import { InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(({ variant = 'md', ...rest }, ref) => {
    return <StyledInput $variant={variant} {...rest} ref={ref} />;
});

export default Input;
