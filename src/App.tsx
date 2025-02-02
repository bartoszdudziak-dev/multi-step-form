import Column from './components/Column';
import Input from './components/Input';
import Label from './components/Label';
import Row from './components/Row';

function App() {
    return (
        <>
            <h1>Hello Vite!</h1>
            <Row style={{}}>
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
        </>
    );
}

export default App;
