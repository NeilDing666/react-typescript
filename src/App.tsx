import React, { FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";

const input = {
  color: "black",
};
// function CalBMI(person:client):number{
//   person.BMI=person.weight/Math.pow(person.height, 2);
//   return (person.BMI);
// }

const InputForm = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState("");

  const onSubmit = (e: FormEvent) => {
    console.log("Submit!");
    e.preventDefault();
  };

  return (
    <div className="input" style={input}>
      <form onSubmit={onSubmit}>
        <label htmlFor="h">Height:</label>
        <input id="h" onChange={(e) => setHeight(parseFloat(e.target.value))} />
        <br />
        <label htmlFor="w">Weight:</label>
        <input id="w" onChange={(e) => setWeight(parseFloat(e.target.value))} />
        <br />
        <button
          type="submit"
          onClick={(e) => setBMI(String(weight / Math.pow(height, 2)))}
        >
          Submit
        </button>
      </form>
      <div id="result">{BMI}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default InputForm;
