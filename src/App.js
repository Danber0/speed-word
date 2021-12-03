import React from 'react';
import { Result } from './components/Result';
import { Typing } from './components/Typing';
import { Welcome } from './components/Welcome';

function App() {
  const [step, setStep] = React.useState('welcome');
  const [stats, setStats] = React.useState({
    words: 0,
    sec: 0,
  });

  const startGame = () => {
    setStep('typing');
  };

  const finishGame = (words, sec) => {
    setStep('result');
    setStats({
      words,
      sec,
    });
  };

  const steps = {
    welcome: <Welcome onClickStart={startGame} />,
    typing: <Typing onFinish={finishGame} />,
    result: <Result stats={stats} onClickStart={startGame} />,
  };

  return (
    <div className="App">
      <div className="common-rect">{steps[step]}</div>
    </div>
  );
}

export default App;
