import Stepper from '../Stepper';
import Heading from '../Heading/Heading';
import Column from '../Column';
import { StyledMultiStepForm } from './MultiStepForm.styled';
import { useMultiStepForm } from './context/useMultiStepForm';

function MultiStepForm() {
    const { steps, step, totalSteps } = useMultiStepForm();

    return (
        <StyledMultiStepForm>
            <Column style={{ gap: '2.5rem' }}>
                <Heading center={true}>Multi Step Form</Heading>

                <Stepper currentStep={step} maxSteps={totalSteps} />

                {steps[step - 1]}
            </Column>
        </StyledMultiStepForm>
    );
}

export default MultiStepForm;
