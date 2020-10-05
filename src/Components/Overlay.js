import React from 'react';
import './overlay.css';

function Overlay(props) {
  return (
    <>
        <div className={"overlay" + (props.mistakes == 3 || props.score == 10 ? " overlay--visible" : "" )}>
            <div className="overlay-inner">
            <p className="end-message">{props.score == 10 ? "Congrats! You won." : "Sorry! You lost."}</p>
            <button ref={props.resetButton} onClick={props.resetGame} className="reset-button">Start Over</button>
            </div>
        </div>
    </>
    );
}

export default Overlay;
