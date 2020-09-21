import React from 'react';
import './progressbar.css';

function ProgressBar() {
  return (
    <>
      <div className="progress">
        <div className="boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="progress-inner"></div>
      </div>
    </>
  );
}

export default ProgressBar;
