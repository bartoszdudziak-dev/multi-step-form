import {
    ContactForm,
    FinalizationForm,
    PersonalForm,
    SkillsForm,
} from './components/FormSteps/Steps';
import MultiStepForm from './components/MultiStepForn';
import { MultiStepFormProvider } from './components/MultiStepForn/context/MultiStepFormProvider';

const steps = [<PersonalForm />, <ContactForm />, <SkillsForm />, <FinalizationForm />];

function App() {
    return (
        <div style={{ paddingBlockStart: '5rem' }}>
            <MultiStepFormProvider steps={steps}>
                <MultiStepForm />
            </MultiStepFormProvider>
        </div>
    );
}

export default App;
