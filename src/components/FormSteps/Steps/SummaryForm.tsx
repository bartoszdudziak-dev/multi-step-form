import Column from '../../Column';
import CustomLabel from '../../Label/CustomLabel';
import { useMultiStepForm } from '../../MultiStepForn/context/useMultiStepForm';
import FormStep from '../Form';
import { SKILLS } from './formOptions';
import styled from 'styled-components';
import { StyledRow } from '../../Row/Row.styled';
import Row from '../../Row';
import { FormEvent } from 'react';

const SummaryRow = styled(StyledRow)`
    align-items: center;
`;

const Span = styled.span`
    color: ${(props) => props.theme.color.accent};
    display: block;
`;

const Paragraph = styled.p`
    word-break: break-all;
    color: ${(props) => props.theme.color.accent};
`;

function SummaryForm() {
    const { formElements, handleFakePostData } = useMultiStepForm();

    const { firstName, lastName, age, email, gender, phoneNumber, message, skills } = formElements;
    const userSkills = Object.entries(skills);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleFakePostData(formElements);
    };

    return (
        <FormStep title="Summary" onSubmit={onSubmit}>
            <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap', gap: '4rem' }}>
                <Column>
                    <SummaryRow>
                        <CustomLabel variant="sm">First Name:</CustomLabel>
                        <Span>{firstName}</Span>
                    </SummaryRow>
                    <SummaryRow>
                        <CustomLabel variant="sm">Last Name:</CustomLabel>
                        <Span>{lastName}</Span>
                    </SummaryRow>
                    <SummaryRow>
                        <CustomLabel variant="sm">Age:</CustomLabel>
                        <Span>{age} yo</Span>
                    </SummaryRow>
                    <SummaryRow>
                        <CustomLabel variant="sm">Gender:</CustomLabel>
                        <Span>{gender}</Span>
                    </SummaryRow>
                    <SummaryRow>
                        <CustomLabel variant="sm">Contact:</CustomLabel>
                        <Span>
                            {email} {phoneNumber}
                        </Span>
                    </SummaryRow>

                    <Column>
                        <CustomLabel variant="sm">Skills:</CustomLabel>
                        <ul
                            style={{
                                marginInlineStart: '4rem',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                            }}
                        >
                            {userSkills.map(([name, value]) => {
                                const skill = SKILLS.find((skill) => skill.name === name);

                                return (
                                    <li key={name} style={{ textAlign: 'center' }}>
                                        <CustomLabel variant="sm">{skill?.label}</CustomLabel>
                                        <Span style={{ marginBlockStart: '0.25rem' }}>{value}</Span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Column>
                </Column>

                {message && (
                    <Column style={{ maxWidth: '40%' }}>
                        <CustomLabel variant="sm">Message:</CustomLabel>
                        <Paragraph>{message}</Paragraph>
                    </Column>
                )}
            </Row>
        </FormStep>
    );
}
export default SummaryForm;
