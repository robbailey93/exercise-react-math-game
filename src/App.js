import React from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';
import Overlay from './Components/Overlay';

function App() {
  const [score, setScore] = React.useState(0)
  const [mistakes, setMistakes] = React.useState(0)
  const [currentProblem, setCurrentProblem] = React.useState(generateProblem())
  const [userAnswer, setUserAnswer] = React.useState('')
  const [showError, setShowError] = React.useState(false)
  const answerField = React.useRef(null)
  const resetButton = React.useRef(null)

  React.useEffect(() => {
    if (score == 10 || mistakes == 3) {
      setTimeout(() => resetButton.current.focus(), 330)
    }
  }, [score, mistakes])

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

    answerField.current.focus()

    let correctAnswer
    if (currentProblem.operator == "+") correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
    if (currentProblem.operator == "-") correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
    if (currentProblem.operator == "x") correctAnswer = currentProblem.numberOne * currentProblem.numberTwo
    if (correctAnswer == parseInt(userAnswer, 10)) {
      setScore(prev => prev + 1)
      setCurrentProblem(generateProblem())
      setUserAnswer('')
    } else {
      setMistakes(prev => prev + 1)
      setUserAnswer('')
      setShowError(true)
      setTimeout(() => setShowError(false), 400)
    }
  }

  function resetGame() {
    setScore(0)
    setMistakes(0)
    setUserAnswer('')
    setCurrentProblem(generateProblem())
    answerField.current.focus()
  }

  return (
    <>
      <div className={"main-ui" + (mistakes == 3 || score == 10 ? " blurred" : "")}>
        <p className={"problem" + (showError ? " animate-wrong" : "")}> {currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}</p>
        <form onSubmit={handleSubmit} className="answer-form">
          <input ref={answerField} value={userAnswer} onChange={e => setUserAnswer(e.target.value)} type="text" className="answer-field" autoComplete="off" />
          <button>Submit</button>
        </form>
        <p className="status">You need {10 - score} more points, and are allowed to make {3 - mistakes} more mistakes.</p>
        <ProgressBar score={score} />
      </div>
      <Overlay mistakes={mistakes} score={score} resetGame={resetGame} resetButton={resetButton} />
    </>
  );
}

export default App;
