// import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <TestComponent name="Suhas" age="25" />
      <TestComponent name="Ranjani" age="25" />
      <TestComponent name="Sunil" age="25" />
    </div>
  );
}

export default App;
