import Heading from '../../Heading';
import { StyledFormStep } from './FormStep.styled';
import { FormStepProps } from './type';

function FormStep({ children, title }: FormStepProps) {
    return (
        <StyledFormStep>
            <Heading as="h2">{title}</Heading>
            {children}
        </StyledFormStep>
    );
}

export default FormStep;
