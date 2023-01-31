import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <div className="App">
      {/* add redux */}
      <Button text={"dfsdfd"} />
      <Quiz />
    </div>
  );
}

export default App;
