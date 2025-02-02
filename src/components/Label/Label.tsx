import { StyledLabel } from './Label.styled';
import { LabelProps } from './type';

function Label({ children, variant = 'md', ...rest }: LabelProps) {
    return (
        <StyledLabel $variant={variant} {...rest}>
            {children}
        </StyledLabel>
    );
}

export default Label;
