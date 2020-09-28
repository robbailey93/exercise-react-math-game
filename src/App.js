import React from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';
import Overlay from './Components/Overlay';

function App() {
  const [score, setScore] = React.useState(0)
  const [mistakes, setMistakes] = React.useState(0)
  const [currentProblem, setCurrentProblem] = React.useState(generateProblem())
  const [userAnswer, setUserAnswer] = React.useState('')

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  }
  
  function generateProblem() {
    return {
      numberOne: generateNumber(10),
      numberTwo: generateNumber(10),
      operator: ['+', '-', 'x'][generateNumber(2)]
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer
    if (currentProblem.operator == "+") correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
    if (currentProblem.operator == "-") correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
    if (currentProblem.operator == "x") correctAnswer = currentProblem.numberOne * currentProblem.numberTwo
    if (correctAnswer == parseInt(userAnswer, 10)) {
      setScore(prev => prev + 1)
    } else {
      setMistakes(prev => prev + 1)
    }
  }

  return (
    <>
      <div className="main-ui">
        <p className="problem"> {currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo} </p>

        <form onSubmit={handleSubmit} action="" className="answer-form">
          <input onChange={e => setUserAnswer(e.target.value)} type="text" className="answer-field" autoComplete="off" />
          <button>Submit</button>
        </form>

        <p className="status">You need {10 - score} more points, and are allowed to make {3 - mistakes} more mistakes.</p>
        <ProgressBar />
      </div>
      <Overlay/>
    </>
  );
}

export default App;
