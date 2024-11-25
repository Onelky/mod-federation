import './App.css'
import Button from 'remoteApp/Button'
import useCount from 'remoteApp/store'

function App() {
    const [count, setCount] = useCount()
    return (
        <>
            <h1>Host</h1>
            {/*<button onClick={() => setCount(prev => prev + 1)}>Remote: {count}</button>*/}
            {/*<button onClick={() => setCount(prev => prev + 1)}>Remote: {count}</button>*/}
            <Button/>
            <Button/>
        </>
    )
}

export default App
