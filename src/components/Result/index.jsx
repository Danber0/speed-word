import React from 'react';

export const Result = ({ stats }) => {
  return (
    <div className="flex result">
      <div className="result__top-icon">😓</div>
      <p className="result__phrase">
        Неплохо! За <b>20 секунд</b>, ты ввел:
      </p>
      <div className="result__number-of-words">{stats.words} слов</div>
      <button className="button" onClick={() => window.location.reload()}>
        🤔 Попробовать снова?
      </button>
    </div>
  );
};
