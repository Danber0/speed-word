import React from 'react';

export const Welcome = ({ onClickStart }) => {
  return (
    <div className="flex start">
      <img
        className="start__image"
        width="50"
        src="https://speed-words.vercel.app/static/media/flag.1fffd39b.png"
        alt="Flag"
      />
      <div className="start__text">
        <h3 className="start__header">speed words</h3>
        <p className="start__phrase">Speed typing words</p>
      </div>
      <button className="button" onClick={onClickStart}>
        🔥 Start
      </button>
    </div>
  );
};
