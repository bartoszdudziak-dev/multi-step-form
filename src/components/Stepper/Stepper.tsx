import { useCallback } from 'react';
import { Progress, ProgressBar, StyledStep, StyledStepper } from './Stepper.styled';
import { StepperProps, StepProps } from './type';

function Step({ value, isDone, isActive }: StepProps) {
    return (
        <StyledStep $isDone={isDone} $isActive={isActive}>
            {value}
        </StyledStep>
    );
}

function Stepper({ currentStep, maxSteps }: StepperProps) {
    const calcualteProgress = useCallback(() => {
        const width = ((currentStep - 1) / (maxSteps - 1)) * 100 + '%';
        return width;
    }, [currentStep, maxSteps]);

    return (
        <StyledStepper>
            {Array.from({ length: maxSteps }).map((_, i) => (
                <Step
                    key={i}
                    value={i + 1}
                    isDone={i + 1 < currentStep}
                    isActive={i + 1 === currentStep}
                />
            ))}
            <ProgressBar>
                <Progress $width={calcualteProgress()} />
            </ProgressBar>
        </StyledStepper>
    );
}

export default Stepper;
