import Checkbox from '../../Checkbox';
import Column from '../../Column';
import Label from '../../Label';
import Textarea from '../../Textarea';
import FormStep from '../Form';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import { AGREEMENTS } from './formOptions';
import { useForm } from 'react-hook-form';
import { AgreementsType } from '../../MultiStepForn/type';
import Error from '../../Error';

function FinalizationForm() {
    const {
        handleUpdateForm,
        formElements: { agreements, message },
    } = useMultiStepForm();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<AgreementsType & { message: string }>({
        mode: 'onChange',
        defaultValues: { message, ...agreements },
    });

    return (
        <FormStep
            title="Final"
            onSubmit={handleSubmit((data) => {
                handleUpdateForm({ message: data.message, agreements: { ...data } });
                console.log(data);
            })}
        >
            <Column>
                <Column>
                    <Label htmlFor="message" variant="lg">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        style={{ maxWidth: '75%' }}
                        {...register('message', {
                            minLength: { value: 50, message: 'Minimum characteres in message: 50' },
                        })}
                    />
                    <Error>{errors?.message?.message}</Error>
                </Column>

                <Column style={{ gap: '1.5rem' }}>
                    {AGREEMENTS.map(({ id, message }) => (
                        <Checkbox
                            key={id}
                            id={id}
                            label={message}
                            name={id as keyof AgreementsType}
                            variant="sm"
                            register={register}
                            options={{ required: true }}
                        />
                    ))}
                    <Error>
                        {('contact' in errors || 'data' in errors || 'policy' in errors) &&
                            'All agreements are required'}
                    </Error>
                </Column>
            </Column>
        </FormStep>
    );
}

export default FinalizationForm;
