import { MultiStepFormProps } from './type';

import Stepper from '../Stepper';
import ControlButtons from './ControlButtons';

import { useState } from 'react';
import { StyledMultiStepForm } from './MultiStepForm.styled';
import Heading from '../Heading/Heading';
import Column from '../Column';

function MultiStepForm({ steps }: MultiStepFormProps) {
    const [step, setStep] = useState(1);
    const totalSteps = steps.length;

    const handleBack = () => {
        if (step === 1) return;
        setStep((prev) => prev - 1);
    };

    const handleNext = () => {
        if (step === totalSteps) return;
        setStep((prev) => prev + 1);
    };

    return (
        <StyledMultiStepForm>
            <Column style={{ gap: '2.5rem' }}>
                <Heading center={true}>Multi Step Form</Heading>
                <Stepper currentStep={step} maxSteps={steps.length} />

                {steps[step - 1]}

                <ControlButtons
                    onBack={handleBack}
                    onNext={handleNext}
                    currentStep={step}
                    totalSteps={totalSteps}
                />
            </Column>
        </StyledMultiStepForm>
    );
}

export default MultiStepForm;
