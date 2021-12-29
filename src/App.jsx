import { useState } from "react";
import "./app.css"
import Quiz from "./components/Quiz.jsx";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)

  const data = [
    {
      id: 1,
      question: "Crear una Pregunta para esta seccion",
      answers: [
        {text: "Opcion A", correct: false},
        {text: "Opcion B", correct: false},
        {text: "Opcion C", correct: true},
        {text: "Opcion D", correct: false},
      ]
    },
    {
      id: 2,
      question: "Crear una segunda Pregunta para esta seccion",
      answers: [
        {text: "Opcion A", correct: false},
        {text: "Opcion B", correct: true},
        {text: "Opcion C", correct: false},
        {text: "Opcion D", correct: false},
      ]
    },
  ]
  const moneyPiramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1.000" },
    { id: 6, amount: "$ 2.000" },
    { id: 7, amount: "$ 4.000" },
    { id: 8, amount: "$ 8.000" },
    { id: 9, amount: "$ 16.000" },
    { id: 10, amount: "$ 32.000" },
    { id: 11, amount: "$ 64.000" },
    { id: 12, amount: "$ 125.000" },
    { id: 13, amount: "$ 250.000" },
    { id: 14, amount: "$ 500.000" },
    { id: 15, amount: "$ 1.000.000" },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz 
            data={data}
            setTimeOut={setTimeOut}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}/>
        </div>
      </div>
      <div className="piramid">
        <ul className="moneyList">
          {moneyPiramid.map((m) =>(
            <li className={questionNumber == m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
