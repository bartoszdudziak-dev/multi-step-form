import {
    ContactForm,
    FinalizationForm,
    PersonalForm,
    SkillsForm,
} from './components/FormSteps/Steps';
import SummaryForm from './components/FormSteps/Steps/SummaryForm';
import MultiStepForm from './components/MultiStepForn';
import { MultiStepFormProvider } from './components/MultiStepForn/context/MultiStepFormProvider';

const steps = [
    <PersonalForm />,
    <ContactForm />,
    <SkillsForm />,
    <FinalizationForm />,
    <SummaryForm />,
];

function App() {
    return (
        <MultiStepFormProvider steps={steps}>
            <MultiStepForm />
        </MultiStepFormProvider>
    );
}

export default App;
