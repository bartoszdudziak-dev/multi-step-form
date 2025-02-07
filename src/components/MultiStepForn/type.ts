import { ReactNode } from 'react';

export type Steps = {
    steps: JSX.Element[];
};

export type MultiStepFormProviderType = Steps & { children: ReactNode };

export type MultiStepFormContextType = {
    step: number;
    totalSteps: number;
    handleNext: () => void;
    handleBack: () => void;
} & Steps;
