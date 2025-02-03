import Button from '../Button';
import Row from '../Row';

type ControlButtonsProps = {
    onBack: () => void;
    onNext: () => void;
    currentStep: number;
    totalSteps: number;
};

function ControlButtons({ onBack, onNext, currentStep, totalSteps }: ControlButtonsProps) {
    return (
        <Row
            style={{
                maxWidth: '20rem',
                justifyContent: 'space-between',
                marginInline: 'auto',
            }}
        >
            {currentStep > 1 && (
                <Button onClick={onBack} style={{ marginInlineEnd: 'auto' }}>
                    Back
                </Button>
            )}
            {currentStep < totalSteps && (
                <Button onClick={onNext} style={{ marginInlineStart: 'auto' }}>
                    Next
                </Button>
            )}
        </Row>
    );
}

export default ControlButtons;
