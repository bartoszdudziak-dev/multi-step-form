import Heading from '../../Heading';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import ControlButtons from '../../MultiStepForn/ControlButtons';
import { StyledFormStep } from './FormStep.styled';
import { FormStepProps } from './type';

function FormStep({ children, title, ...rest }: FormStepProps) {
    const { handleBack, totalSteps, step } = useMultiStepForm();

    return (
        <StyledFormStep {...rest}>
            <Heading as="h2">{title}</Heading>
            {children}

            <ControlButtons onBack={handleBack} currentStep={step} totalSteps={totalSteps} />
        </StyledFormStep>
    );
}

export default FormStep;
