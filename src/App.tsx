import Input from './components/Input';

function App() {
    return (
        <>
            <h1>Hello Vite!</h1>
            <div style={{ padding: '10rem' }}>
                <Input size="sm" />
                <Input />
                <Input size="lg" />
            </div>
        </>
    );
}

export default App;
