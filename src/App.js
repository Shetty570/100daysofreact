// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";

function App() {
  const [isActive, setIsActive] = useState(false);

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

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
      <TestComponent name="Sunil" age="25" />
      {isActive && (
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      )}
      <p>{message}</p>
    </div>
  );
}

export default App;
