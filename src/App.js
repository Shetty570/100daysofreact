// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";
import Form from "./components/Form";

function App() {
  const [isActive, setIsActive] = useState(false);

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "hide" : "show"}
      </button>
      {isActive && <TestComponent name="Suhas" age="25" />}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <TestComponent name="Ranjani" age={counter} />
      <Form />
    </div>
  );
}

export default App;
