import React from 'react';
import './overlay.css';

function Overlay() {
  return (
    <>
        <div className="overlay">
            <div className="overlay-inner">
            <p className="end-message"></p>
            <button className="reset-button">Start Over</button>
            </div>
        </div>
    </>
    );
}

export default Overlay;
