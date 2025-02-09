import { MultiStepFormContext } from './MultiStepFormContext';
import { FormElements, MultiStepFormProviderType } from '../type';
import { useState } from 'react';

const initialFormElements = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    skills: {
        html: '',
        css: '',
        english: '',
        javascript: '',
        react: '',
    },
    message: '',
    agrements: {
        contact: true,
        data: false,
        policy: false,
    },
};

export function MultiStepFormProvider({ children, steps }: MultiStepFormProviderType) {
    const [formElements, setFormElements] = useState<FormElements>(initialFormElements);
    const [step, setStep] = useState(4);
    const totalSteps = steps.length;

    const handleBack = () => {
        if (step === 1) return;
        setStep((prev) => prev - 1);
    };

    const handleNext = () => {
        if (step === totalSteps) return;
        setStep((prev) => prev + 1);
    };

    const handleUpdateForm = (form: Partial<FormElements>) => {
        setFormElements((prevForm) => ({ ...prevForm, ...form }));
        handleNext();
    };

    return (
        <MultiStepFormContext.Provider
            value={{
                step,
                steps,
                totalSteps,
                formElements,
                handleBack,
                handleNext,
                handleUpdateForm,
            }}
        >
            {children}
        </MultiStepFormContext.Provider>
    );
}
