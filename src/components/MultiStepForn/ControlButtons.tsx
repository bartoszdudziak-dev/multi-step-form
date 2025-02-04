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
                justifyContent: 'space-between',
                marginInline: 'auto',
                width: '100%',
            }}
        >
            {currentStep > 1 && (
                <Button
                    onClick={onBack}
                    style={{ marginInlineEnd: 'auto', maxWidth: '8rem', width: '100%' }}
                >
                    Back
                </Button>
            )}
            {currentStep < totalSteps && (
                <Button
                    onClick={onNext}
                    style={{ marginInlineStart: 'auto', maxWidth: '8rem', width: '100%' }}
                >
                    Next
                </Button>
            )}
        </Row>
    );
}

export default ControlButtons;
