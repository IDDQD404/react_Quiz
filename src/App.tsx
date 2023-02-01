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
      <Quiz
        QuestionLabel={"1"}
        QuestionBody={"1"}
        VariantsAnswer={["1", "2"]}
        CompletedQuestions={[true]}
      />
    </div>
  );
}

export default App;
