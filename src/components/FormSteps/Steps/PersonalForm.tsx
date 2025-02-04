import Column from '../../Column';
import Dropdown from '../../Dropdown';
import Input from '../../Input';
import Label from '../../Label';
import CustomLabel from '../../Label/CustomLabel';
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

function PersonalForm() {
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
                        <Dropdown items={REGIONS} variant="sm" placeholder="Choose region" />
                    </Column>
                </Row>

                <Column>
                    <CustomLabel>Gender</CustomLabel>
                    <Row style={{ gap: '2rem' }}>
                        <Radio variant="sm" label="Male" value="male" name="gender" />
                        <Radio variant="sm" label="Female" value="female" name="gender" />
                        <Radio variant="sm" label="Other" value="other" name="gender" />
                    </Row>
                </Column>

                <Column>
                    <CustomLabel>Age</CustomLabel>
                    <Row style={{ gap: '2rem' }}>
                        <Radio variant="sm" name="age" label="> 18" value="under 18" />
                        <Radio variant="sm" name="age" label="18 - 24" value="18-24" />
                        <Radio variant="sm" name="age" label="25 - 34" value="25-34" />
                        <Radio variant="sm" name="age" label="35 - 44" value="35-44" />
                        <Radio variant="sm" name="age" label="45+" value="over 45" />
                    </Row>
                </Column>
            </Column>
        </FormStep>
    );
}

export default PersonalForm;
