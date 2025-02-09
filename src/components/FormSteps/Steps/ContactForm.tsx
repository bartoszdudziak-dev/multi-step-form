import Column from '../../Column';
import Input from '../../Input';
import Label from '../../Label';
import FormStep from '../Form';
import Error from '../../Error';

import { useForm } from 'react-hook-form';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';

function ContactForm() {
    const {
        handleUpdateForm,
        formElements: { email, phoneNumber },
    } = useMultiStepForm();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange', defaultValues: { email, phoneNumber } });

    return (
        <FormStep title="Contact" onSubmit={handleSubmit(handleUpdateForm)}>
            <Column>
                <Column>
                    <Label htmlFor="email">Email Address</Label>
                    <div>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            {...register('email', {
                                required: { value: true, message: 'Email is required' },
                                pattern: {
                                    value: new RegExp(
                                        '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
                                    ),
                                    message: 'Provide valid email',
                                },
                            })}
                        />
                    </div>
                    <Error>{errors.email && String(errors.email.message)}</Error>
                </Column>
                <Column>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div>
                        <Input
                            id="phone"
                            autoComplete="tel"
                            {...register('phoneNumber', {
                                required: { value: true, message: 'Phone Number is required' },
                                pattern: {
                                    value: new RegExp('^\\+\\d{1,3}\\d{7,12}$'),
                                    message: 'Provide valid phone number (prefix required)',
                                },
                            })}
                        />
                    </div>
                    <Error>{errors.phoneNumber && String(errors.phoneNumber.message)}</Error>
                </Column>
            </Column>
        </FormStep>
    );
}

export default ContactForm;
