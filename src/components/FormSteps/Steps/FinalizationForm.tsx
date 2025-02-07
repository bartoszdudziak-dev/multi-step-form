import Checkbox from '../../Checkbox';
import Column from '../../Column';
import Label from '../../Label';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import ControlButtons from '../../MultiStepForn/ControlButtons';
import Textarea from '../../Textarea';
import FormStep from '../Form';

const AGREEMENTS = [
    { id: 'policy', message: 'I confirm that I have reviewed and acknowledged the policy.' },
    {
        id: 'data',
        message: 'I acknowledge that my data will be stored and retained as per policy.',
    },
    {
        id: 'contact',
        message:
            'I agree to be contacted via email and phone regarding relevant updates and information.',
    },
];

function FinalizationForm() {
    const { handleBack, handleNext, step, totalSteps } = useMultiStepForm();

    return (
        <FormStep title="Final">
            <Column style={{ gap: '2rem' }}>
                <Column>
                    <Label htmlFor="message" variant="lg">
                        Message
                    </Label>
                    <Textarea id="message" style={{ maxWidth: '75%' }} />
                </Column>

                <Column style={{ gap: '1.5rem' }}>
                    {AGREEMENTS.map(({ id, message }) => (
                        <Checkbox key={id} label={message} id={id} variant="sm" />
                    ))}
                </Column>
            </Column>

            <ControlButtons
                onBack={handleBack}
                onNext={handleNext}
                currentStep={step}
                totalSteps={totalSteps}
            />
        </FormStep>
    );
}

export default FinalizationForm;
