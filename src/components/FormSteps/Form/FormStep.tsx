import Heading from '../../Heading';
import { StyledFormStep } from './FormStep.styled';
import { FormStepProps } from './type';

function FormStep({ children, title }: FormStepProps) {
    return (
        <StyledFormStep>
            <Heading as="h2" style={{ marginBlockEnd: '2.5rem' }}>
                {title}
            </Heading>
            {children}
        </StyledFormStep>
    );
}

export default FormStep;
