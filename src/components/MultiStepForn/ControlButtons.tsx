import Button from '../Button';
import Row from '../Row';

type ControlButtonsProps = {
    onBack: () => void;
    onNext?: () => void;
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
                marginBlockStart: '1rem',
                alignItems: 'center',
            }}
        >
            {currentStep > 1 && (
                <Button
                    onClick={onBack}
                    style={{ marginInlineEnd: 'auto', maxWidth: '8rem', width: '100%' }}
                    type="button"
                >
                    Back
                </Button>
            )}

            <Button
                onClick={() => {
                    if (onNext && typeof onNext === 'function') onNext();
                }}
                style={{ marginInlineStart: 'auto', maxWidth: '8rem', width: '100%' }}
                type="submit"
            >
                {currentStep === totalSteps ? 'Send' : 'Next'}
            </Button>
        </Row>
    );
}

export default ControlButtons;
