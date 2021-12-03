import React from 'react';

const texts = [
  'Наверное вы ещё не готовы к такой музыке но вашим детям она понравится',
  'Тото у меня такое ощущение что мы больше не в Канзасе',
  'Не судите меня за прошлое я не живу там больше.',
  'Как принято считать стремящиеся вытеснить традиционное производство нанотехнологии обнародованы',
  'Не следует однако забывать о том что выбранный нами инновационный',
  'Сегодняшний день она планировала завершить порцией тако',
  'У Грей не намечалось свадьбы и до пенсии ей было далеко',
  'На третьем этаже новая компания айтишники',
  'Двери лифта открылись на втором этаже',
  'Она протирала стекла своих черепаховых очков, но не сводила глаз с Дженнифер',
  'В отличие от мужчин женщины оставляли свою личность вместе с ключами, документами и неоплаченными счетами за электричество',
  'Но у Грей и так имелось достаточно информации чтобы начать работать',
  'Люди вокруг шмыгали носами у них слезились глаза и Грей поежилась',
  'Вот и начались вопросы а ведь у Грей и глаза не слезятся и легкие чистые',
  'Так отец Грей Виктор говорит о хорошеньких девушках вроде Изабель Линкольн',
  'Пройдя через двойные двери мимо людей истекавших кровью мимо астматиков и гудящих аппаратов Грей наконец оказалась в кабинете Иана',
  'Капля пота стекала по ее виску но она ее не смахивала',
];

const sentence = texts[Math.floor(Math.random() * texts.length)];
const words = sentence.split(' ');

export const Typing = ({ onFinish }) => {
  const curIndexRef = React.useRef(0);
  const timerRef = React.useRef(null);
  const [sec, setSec] = React.useState(20);
  const [wordsCount, setWordsCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState('');
  const [currentWord, setCurrentWord] = React.useState(words[0]);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setSec((prev) => {
        const value = prev - 1;

        if (!value) {
          clearInterval(timerRef.current);
          onFinish(curIndexRef.current, 20 - value);
        }

        return value;
      });
    }, 1000);
  }, []);

  const onChangeInput = (e) => {
    const { value } = e.target;

    if (currentWord === value) {
      curIndexRef.current += 1;

      if (curIndexRef.current >= words.length - 1) {
        clearInterval(timerRef.current);
        onFinish(curIndexRef.current, sec);
        return;
      }

      setCurrentWord(words[curIndexRef.current]);
      setInputValue('');
      setWordsCount((prev) => prev + 1);
      return;
    }

    if (!new RegExp(`^${value}`).test(currentWord)) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    setInputValue(e.target.value.trim());
  };

  return (
    <div className="flex typing">
      <p className="typing__enter-word">Введите слово:</p>
      <h3 className="typing__word">{currentWord}</h3>
      <input
        value={inputValue}
        onChange={onChangeInput}
        className={`typing__input ${isError ? 'error' : ''}`}
        type="text"
      />
      <div className="typing__progress">
        <div className="typing__timer">
          <p>Осталось времени:</p>
          <b>{sec} сек.</b>
        </div>
        <div className="typing__counter">
          <p>Введено слов:</p>
          <b>{wordsCount}</b>
        </div>
      </div>
    </div>
  );
};
