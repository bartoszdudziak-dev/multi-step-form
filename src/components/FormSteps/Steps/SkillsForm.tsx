import Column from '../../Column';

import CustomLabel from '../../Label/CustomLabel';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import ControlButtons from '../../MultiStepForn/ControlButtons';
import Radio from '../../Radio';
import Row from '../../Row';
import FormStep from '../Form';

const createGradesArray = (quntity: number) => {
    return Array.from({ length: quntity }).map((_, i) => ({
        label: `${i + 1}`,
        value: `${i + 1}`,
    }));
};

const englishLevels = [
    { label: 'A1', value: 'a1' },
    { label: 'A2', value: 'a2' },
    { label: 'B1', value: 'b1' },
    { label: 'B2', value: 'b2' },
    { label: 'C1', value: 'c1' },
    { label: 'C2', value: 'c2' },
];

const SKILLS = [
    {
        label: 'HTML',
        name: 'html',
        grades: createGradesArray(5),
    },
    { label: 'CSS', name: 'css', grades: createGradesArray(5) },
    { label: 'JavaScript', name: 'js', grades: createGradesArray(5) },
    { label: 'React', name: 'react', grades: createGradesArray(5) },
    { label: 'English', name: 'english', grades: englishLevels },
];

function SkillsForm() {
    const { handleBack, handleNext, step, totalSteps } = useMultiStepForm();

    return (
        <FormStep title="Skills">
            <Column style={{ gap: '2rem' }}>
                {SKILLS.map(({ name, label, grades }) => {
                    return (
                        <Row key={name}>
                            <div style={{ minWidth: '8rem' }}>
                                <CustomLabel variant="lg">{label}</CustomLabel>
                            </div>
                            <Row style={{ gap: '2rem' }}>
                                {grades.map(({ value, label: gradeLabel }) => (
                                    <Radio
                                        key={value}
                                        label={gradeLabel}
                                        value={value}
                                        name={label}
                                        variant="sm"
                                    />
                                ))}
                            </Row>
                        </Row>
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

export default SkillsForm;
