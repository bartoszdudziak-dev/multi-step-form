import Column from '../../Column';
import Input from '../../Input';
import Label from '../../Label';
import FormStep from '../Form';

function ContactForm() {
    return (
        <FormStep title="Contact">
            <Column style={{ gap: '2rem' }}>
                <Column>
                    <Label htmlFor="email">Email Address</Label>
                    <div>
                        <Input id="email" name="email" type="email" />
                    </div>
                </Column>
                <Column>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div>
                        <Input id="phone" name="phone" type="number" />
                    </div>
                </Column>
            </Column>
        </FormStep>
    );
}

export default ContactForm;
