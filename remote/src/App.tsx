import './App.css'
import Button from "./Button.tsx";
import { Provider as JotaiProvider } from "jotai";

function App() {
  return (
      <JotaiProvider>
          <h1>Remote</h1>
          <Button/>
          <Button/>
      </JotaiProvider>
  )
}

export default App
