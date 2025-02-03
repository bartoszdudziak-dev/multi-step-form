import { MultiStepFormProps } from './type';

import Stepper from '../Stepper';
import ControlButtons from './ControlButtons';

import { useState } from 'react';
import { StyledMultiStepForm } from './MultiStepForm.styled';

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
        <StyledMultiStepForm style={{ maxWidth: '50em', marginInline: 'auto' }}>
            <Stepper currentStep={step} maxSteps={steps.length} />

            <div>{steps[step - 1]}</div>

            <ControlButtons
                onBack={handleBack}
                onNext={handleNext}
                currentStep={step}
                totalSteps={totalSteps}
            />
        </StyledMultiStepForm>
    );
}

export default MultiStepForm;
