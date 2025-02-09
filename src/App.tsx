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
        <MultiStepFormProvider steps={steps}>
            <MultiStepForm />
        </MultiStepFormProvider>
    );
}

export default App;
