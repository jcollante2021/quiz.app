import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Quiz from "./components/Quiz.jsx";
import Start from "./components/Start.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")
  const [finalTime, setFinalTime] = useState(false)

  const data = [
    {
      id: 1,
      question: "¿Cuál es la ciudad más poblada mundo?",
      answers: [
        {text: "São Paulo", correct: false},
        {text: "Bombay", correct: false},
        {text: "Tokio", correct: true},
        {text: "Buenos Aires", correct: false},
      ]
    },
    {
      id: 2,
      question: "¿Cuál fue la primera película de Walt Disney?",
      answers: [
        {text: "Blancanieves y los siete enanitos", correct: true},
        {text: "Pocahontas", correct: false},
        {text: "Cenicientas", correct: false},
        {text: "Toy Story", correct: false},
      ]
    },
    {
      id: 3,
      question: "¿Cuál es el río más largo del mundo?",
      answers: [
        {text: "Misisipi-Misuri", correct: false},
        {text: "Nilo", correct: true},
        {text: "Amazonas", correct: false},
        {text: "Yangtsé", correct: false},
      ]
    },
    {
      id: 4,
      question: "¿Qué cantidad de huesos hay en el cuerpo humano?",
      answers: [
        {text: "206", correct: true},
        {text: "254", correct: false},
        {text: "198", correct: false},
        {text: "276", correct: false},
      ]
    },
    {
      id: 5,
      question: "¿De qué se alimentan los koalas?",
      answers: [
        {text: "Insectos", correct: false},
        {text: "Bambú", correct: false},
        {text: "Hojas de eucalipto", correct: true},
        {text: "Flores silvestres", correct: false},
      ]
    },
    {
      id: 6,
      question: "¿Quién pintó “La última cena”?",
      answers: [
        {text: "Vincent van Gogh", correct: false},
        {text: "Claude Monet", correct: false},
        {text: "Pablo Picasso", correct: false},
        {text: "Leonardo da Vinci", correct: true},
      ]
    },
    {
      id: 7,
      question: "¿Cuál es el océano más grande?",
      answers: [
        {text: "Océano Ártico", correct: false},
        {text: "Océano Atlántico", correct: false},
        {text: "Océano Pacífico", correct: true},
        {text: "Océano Índico", correct: false},
      ]
    },
    {
      id: 8,
      question: "¿Cuál es quinto planeta en el sistema solar?",
      answers: [
        {text: "Marte", correct: false},
        {text: "Júpiter", correct: true},
        {text: "Saturno", correct: false},
        {text: "Urano", correct: false},
      ]
    },
    {
      id: 9,
      question: "¿Cuándo empezó la Primera Guerra Mundial?",
      answers: [
        {text: "1909", correct: false},
        {text: "1919", correct: false},
        {text: "1905", correct: false},
        {text: "1914", correct: true},
      ]
    },
    {
      id: 10,
      question: "¿Quién fue el primer humano que pisó la luna?",
      answers: [
        {text: "Neil Armstrong", correct: true},
        {text: "Alan Shepard", correct: false},
        {text: "Michael Collins", correct: false},
        {text: "Harrison Schmitt", correct: false},
      ]
    },
    {
      id: 11,
      question: "¿Cuántos dientes tiene una persona adulta?",
      answers: [
        {text: "29", correct: false},
        {text: "30", correct: false},
        {text: "32", correct: true},
        {text: "33", correct: false},
      ]
    },
    {
      id: 12,
      question: "¿Cuál es el país de nacimiento de Pablo Neruda?",
      answers: [
        {text: "Argentina", correct: false},
        {text: "Chile", correct: true},
        {text: "Bolivia", correct: false},
        {text: "Paraguay", correct: false},
      ]
    },
    {
      id: 13,
      question: "¿Quién descubrió la penicilina?",
      answers: [
        {text: "René Favaloro", correct: false},
        {text: "Sigmund Freud", correct: false},
        {text: "Louis Pasteur", correct: false},
        {text: "Alexander Fleming", correct: true},
      ]
    },
    {
      id: 14,
      question: "Según los escritos bíblicos, ¿Quién traicionó a Jesús?",
      answers: [
        {text: "Pablo", correct: false},
        {text: "Judas", correct: true},
        {text: "Marcos", correct: false},
        {text: "Juan", correct: false},
      ]
    },
    {
      id: 1,
      question: "¿Que tiene en su interior la vacuna contra el COVID-19?",
      answers: [
        {text: "Grafeno", correct: false},
        {text: "Chip 5G", correct: false},
        {text: "Que se yo que tiene", correct: true},
        {text: "Chips de Chocolate", correct: false},
      ]
    },
  ]
  const moneyPiramid = useMemo (() => 
    [
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
    ].reverse(),
  []); 

  useEffect(() =>{
    questionNumber >1 && setEarned(moneyPiramid.find(m=>m.id === questionNumber -1).amount)
  },[moneyPiramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (<h1 className="endText">JUEGO FINALIZADO <br/> {username} Ganaste: {earned}</h1>) : (
              <>
                <div className="top">
                  <div className={finalTime ? "timer finalTime" : "timer"}>
                    <Timer setStop={setStop} questionNumber={questionNumber} setFinalTime={setFinalTime} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz 
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}/>
                </div>
              </>
            )};
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
        </>
      ) : (<Start setUsername={setUsername}/>)}
    </div>
  );
}

export default App;
