import { StyledCustomLabel } from './Label.styled';
import { CustomLabelProps } from './type';

function CustomLabel({ children, variant = 'lg' }: CustomLabelProps) {
    return <StyledCustomLabel $variant={variant}>{children}</StyledCustomLabel>;
}

export default CustomLabel;
