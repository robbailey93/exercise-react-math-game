import React from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';
import Overlay from './Components/Overlay';

function App() {
  const [score, setScore] = React.useState(0)
  const [mistakes, setMistakes] = React.useState(0)

  return (
    <>
      <div className="main-ui">
        <p className="problem"></p>

        <form action="" className="answer-form">
          <input type="text" className="answer-field" autoComplete="off" />
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
