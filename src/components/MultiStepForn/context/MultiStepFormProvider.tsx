import { MultiStepFormContext } from './MultiStepFormContext';
import { MultiStepFormProviderType } from '../type';
import { useState } from 'react';

export function MultiStepFormProvider({
    children,
    steps,
}: MultiStepFormProviderType)  {
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
        <MultiStepFormContext.Provider
            value={{ handleBack, handleNext, step, steps, totalSteps }}
        >
            {children}
        </MultiStepFormContext.Provider>
    );
}
