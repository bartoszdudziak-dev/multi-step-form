import { ContactForm, FinalizationForm, PersonalForm, SkillsForm } from './components/FormSteps';
import MultiStepForm from './components/MultiStepForn';

const steps = [<PersonalForm />, <ContactForm />, <SkillsForm />, <FinalizationForm />];

function App() {
    return (
        <div style={{ paddingBlockStart: '5rem' }}>
            <MultiStepForm steps={steps} />
        </div>
    );
}

export default App;
