import React from "react";

export const Result = ({ stats }) => {
  console.log(stats.sec);
  return (
    <div className="flex result">
      <div className="result__top-icon">😓</div>
      <p className="result__phrase">
        Not bad! <b>{20 - stats.sec === 0 ? 20 : 20 - stats.sec} seconds</b>,
        your input:
      </p>
      <div className="result__number-of-words">{stats.words} words</div>
      <button className="button" onClick={() => window.location.reload()}>
        🤔 Again?
      </button>
    </div>
  );
};
