import { StyledButton } from './Button.styled';
import { ButtonProps } from './type';

function Button({ children, variant = 'md', ...rest }: ButtonProps) {
    return (
        <StyledButton $variant={variant} {...rest}>
            {children}
        </StyledButton>
    );
}

export default Button;
