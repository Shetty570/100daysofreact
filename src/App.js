// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";

function App() {
  const [isActive, setIsActive] = useState(false);

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setIsActive(!isActive)}>Click</button>
      {isActive && <TestComponent name="Suhas" age="25" />}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <TestComponent name="Ranjani" age={counter} />
      <TestComponent name="Sunil" age="25" />
    </div>
  );
}

export default App;
