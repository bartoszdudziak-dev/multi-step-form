import Button from './components/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Column from './components/Column';
import Input from './components/Input';
import Label from './components/Label';
import Row from './components/Row';

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
                <Checkbox id="confrim" label="Confirm" />
                <Checkbox id="test" />
            </Row>
        </>
    );
}

export default App;
