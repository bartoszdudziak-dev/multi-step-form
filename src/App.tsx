import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Column from './components/Column';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Label from './components/Label';
import Radio from './components/Radio';
import Row from './components/Row';
import Stepper from './components/Stepper';

const items = [
    { name: 'Item 1', value: 1 },
    { name: 'Item 2', value: 2 },
    { name: 'Item 3Item 3Item 3', value: 3 },
    { name: 'Item 4', value: 4 },
    { name: 'Item 5', value: 5 },
    { name: 'Item 6', value: 6 },
    { name: 'Item 7', value: 7 },
    { name: 'Item 8', value: 8 },
];

function App() {
    return (
        <>
            <h1>Hello Vite!</h1>
            <Row>
                <Column>
                    <Label htmlFor="name" variant="sm">
                        First Name
                    </Label>
                    <Input id="name" variant="sm" />
                </Column>
                <Column>
                    <Label>First Name</Label>
                    <Input />
                </Column>
                <Column>
                    <Label variant="lg">First Name</Label>
                    <Input variant="lg" />
                </Column>
            </Row>

            <Row>
                <Column>
                    <Button variant="sm">Click me</Button>
                </Column>
                <Column>
                    <Button>Click me</Button>
                </Column>
                <Column>
                    <Button type="submit" variant="lg">
                        Click me
                    </Button>
                </Column>
            </Row>

            <Row>
                <Checkbox variant="sm" id="confrim1" label="Confirm" />
                <Checkbox variant="md" id="confirm2" label="Confirm" />
                <Checkbox variant="lg" id="confirm3" label="Confirm" />
            </Row>

            <Row>
                <Radio variant="sm" id="radio1" label="Radio" name="radio" />
                <Radio variant="md" id="radio2" label="Radio" name="radio" />
                <Radio variant="lg" id="radio3" label="Radio" />
            </Row>

            <Row>
                <Dropdown items={items} variant="lg" />
                <Dropdown
                    placeholder="Country"
                    items={[
                        { name: 'Poland', value: 'poland' },
                        { name: 'Germany', value: 'german' },
                        { name: 'USA', value: 'us' },
                    ]}
                />
            </Row>

            <Stepper maxSteps={3} currentStep={3} />
            <Stepper maxSteps={5} currentStep={5} />
        </>
    );
}

export default App;
