import Column from '../../Column';
import Dropdown from '../../Dropdown';
import Input from '../../Input';
import Label from '../../Label';
import CustomLabel from '../../Label/CustomLabel';
import Radio from '../../Radio';
import Row from '../../Row';
import FormStep from '../Form';
import Error from '../../Error';

import { FormElements } from '../../MultiStepForn/type';
import { Controller, useForm } from 'react-hook-form';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import { PERSONAL, REGIONS } from './formOptions';

function PersonalForm() {
    const {
        handleUpdateForm,
        formElements: { age, gender, firstName, lastName, region },
    } = useMultiStepForm();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<Partial<FormElements>>({
        mode: 'onChange',
        defaultValues: { age, gender, firstName, lastName, region },
    });

    return (
        <FormStep title="Personal" onSubmit={handleSubmit(handleUpdateForm)} noValidate={true}>
            <Column>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Row>
                        <Column>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                autoComplete="given-name"
                                {...register('firstName', { required: 'First name is required' })}
                            />
                            <Error>{errors.firstName && String(errors.firstName.message)}</Error>
                        </Column>
                        <Column>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                autoComplete="family-name"
                                {...register('lastName', { required: 'Last name is required' })}
                            />
                            <Error>{errors.lastName && String(errors.lastName.message)}</Error>
                        </Column>
                    </Row>

                    <Column>
                        <CustomLabel>Region</CustomLabel>
                        <Controller
                            control={control}
                            name="region"
                            rules={{
                                required: { value: true, message: 'Select your region' },
                            }}
                            render={({ field }) => (
                                <Dropdown
                                    items={REGIONS}
                                    variant="sm"
                                    placeholder="Choose region"
                                    style={{ width: '12rem', maxWidth: '100%' }}
                                    onChoice={field.onChange}
                                    value={field?.value || ''}
                                />
                            )}
                        />
                        <Error>{errors?.region?.message}</Error>
                    </Column>
                </Row>

                {PERSONAL.map(({ label, options, name }) => {
                    return (
                        <Column key={name}>
                            <CustomLabel>{label}</CustomLabel>
                            <Row style={{ gap: '2rem' }}>
                                {options.map(({ label: radioLabel, value }) => (
                                    <Radio
                                        id={value}
                                        variant="sm"
                                        key={value}
                                        name={name as keyof FormElements}
                                        label={radioLabel}
                                        value={value}
                                        register={register}
                                        options={{
                                            required: {
                                                value: true,
                                                message: `${label} is required`,
                                            },
                                        }}
                                    />
                                ))}
                            </Row>
                            <Error>{errors[name as keyof FormElements]?.message as string}</Error>
                        </Column>
                    );
                })}
            </Column>
        </FormStep>
    );
}

export default PersonalForm;
