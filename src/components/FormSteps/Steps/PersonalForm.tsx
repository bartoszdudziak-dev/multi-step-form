import Column from '../../Column';
import Dropdown from '../../Dropdown';
import Input from '../../Input';
import Label from '../../Label';
import CustomLabel from '../../Label/CustomLabel';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import ControlButtons from '../../MultiStepForn/ControlButtons';
import Radio from '../../Radio';
import Row from '../../Row';
import FormStep from '../Form';

const REGIONS = [
    { name: 'Africa', value: 'africa' },
    { name: 'America', value: 'america' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'Oceania', value: 'oceania' },
];

const GENDERS_OPTIONS = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const AGE_OPTIONS = [
    { label: '> 18', value: 'under 18' },
    { label: '18 - 24', value: '18-24' },
    { label: '25 - 34', value: '25-34' },
    { label: '35 - 44', value: '35-44' },
    { label: '45+', value: 'over 45' },
];

const PERSONAL = [
    { label: 'Age', name: 'age', options: GENDERS_OPTIONS },
    { label: 'Gender', name: 'gender', options: AGE_OPTIONS },
];

function PersonalForm() {
    const { handleBack, handleNext, step, totalSteps } = useMultiStepForm();

    return (
        <FormStep title="Personal">
            <Column style={{ gap: '2rem' }}>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Row>
                        <Column>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" name="firstName" />
                        </Column>
                        <Column>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" name="lastName" />
                        </Column>
                    </Row>

                    <Column>
                        <CustomLabel>Region</CustomLabel>
                        <Dropdown
                            items={REGIONS}
                            variant="sm"
                            placeholder="Choose region"
                            style={{ width: '12rem', maxWidth: '100%' }}
                        />
                    </Column>
                </Row>

                {PERSONAL.map(({ label, options, name }) => {
                    return (
                        <Column key={name}>
                            <CustomLabel>{label}</CustomLabel>
                            <Row style={{ gap: '2rem' }}>
                                {options.map(({ label, value }) => (
                                    <Radio
                                        variant="sm"
                                        name={name}
                                        key={value}
                                        label={label}
                                        value={value}
                                    />
                                ))}
                            </Row>
                        </Column>
                    );
                })}
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

export default PersonalForm;
