import FormStep from '../Form';
import Column from '../../Column';
import Row from '../../Row';
import CustomLabel from '../../Label/CustomLabel';
import Radio from '../../Radio';

import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import { useForm } from 'react-hook-form';
import { SKILLS } from './formOptions';
import { SkillsType } from '../../MultiStepForn/type';
import Error from '../../Error';

function SkillsForm() {
    const {
        handleUpdateForm,
        formElements: { skills },
    } = useMultiStepForm();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SkillsType>({
        mode: 'onChange',
        defaultValues: skills,
    });

    return (
        <FormStep
            title="Skills"
            onSubmit={handleSubmit((data) => handleUpdateForm({ skills: { ...data } }))}
        >
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
                                        id={name + '-' + value}
                                        variant="sm"
                                        key={value}
                                        name={name as keyof SkillsType}
                                        label={gradeLabel}
                                        value={value}
                                        register={register}
                                        options={{ required: true }}
                                    />
                                ))}
                            </Row>
                        </Row>
                    );
                })}
            </Column>
            <Error>
                {!!Object.keys(errors).length && 'Select one of the options for each category '}
            </Error>
        </FormStep>
    );
}

export default SkillsForm;
