import { ReactNode } from 'react';

export type Steps = {
    steps: JSX.Element[];
};

export type MultiStepFormProviderType = Steps & { children: ReactNode };

export type MultiStepFormContextType = {
    step: number;
    totalSteps: number;
    formElements: FormElements;
    handleNext: () => void;
    handleBack: () => void;
    handleUpdateForm: (form: Partial<FormElements>) => void;
    handleRestartForm: () => void;
    handleFakePostData: (data: FormElements) => void;
} & Steps;

export type SkillsType = {
    html: string;
    css: string;
    javascript: string;
    react: string;
    english: string;
};

export type AgreementsType = {
    contact: boolean;
    data: boolean;
    policy: boolean;
};

export type FormElements = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    age: string;
    gender: string;
    region: string;
    skills: SkillsType;
    message: string;
    agreements: AgreementsType;
};