export type StepperProps = { currentStep: number; maxSteps: number };

export type StepProps = {
    value: number;
    isDone: boolean;
    isActive: boolean;
};

export type StyledStepProp = {
    $isDone: boolean;
    $isActive: boolean;
};
