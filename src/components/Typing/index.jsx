import React from "react";

const texts = [
  "One small action would change her life, but whether it would be for better or for worse was yet to be determined.",
  "Plans for this weekend include turning wine into water.",
  "They desperately needed another drummer since the current one only knew how to play bongos.",
  "Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?",
  "She insisted that cleaning out your closet was the key to good driving.",
  "She found his complete dullness interesting.",
  "There are over 500 starfish in the bathroom drawer.",
  "It caught him off guard that space smelled of seared steak.",
  "I want more detailed information.",
  "She wanted to be rescued, but only if it was Tuesday and raining.",
  "She wore green lipstick like a fashion icon.",
  "She wrote him a long letter, but he didn't read it.",
  "She cried diamonds.",
  "The changing of down comforters to cotton bedspreads always meant the squirrels had returned.",
  "Today is the day I'll finally know what brick tastes like.",
  "She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.",
  "The balloons floated away along with all my hopes and dreams.",
  "I used to live in my neighbor's fishpond, but the aesthetic wasn't to my taste.",
  "The Guinea fowl flies through the air with all the grace of a turtle.",
  "The tortoise jumped into the lake with dreams of becoming a sea turtle.",
  "Thigh-high in the water, the fishermans hope for dinner soon turned to despair.",
  "She can live her life however she wants as long as she listens to what I have to say.",
  "The lake is a long way from here.",
  "It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
  "Patricia loves the sound of nails strongly pressed against the chalkboard.",
  "Jeanne wished she has chosen the red button.",
  "Mary plays the piano.",
  "Don't put peanut butter on the dog's nose.",
  "If you really strain your ears, you can just about hear the sound of no one giving a damn.",
  "If I dont like something, Ill stay away from it.",
  "They improved dramatically once the lead singer left.",
  "The bullet pierced the window shattering it before missing Danny's head by mere millimeters.",
  "There's a growing trend among teenagers of using frisbees as go-cart wheels.",
  "25 years later, she still regretted that specific moment.",
  "Even with the snow falling outside, she felt it appropriate to wear her bikini.",
  "Chocolate covered crickets were his favorite snack.",
  "All you need to do is pick up the pen and begin.",
  "I am happy to take your donation; any amount will be greatly appreciated.",
  "The father died during childbirth.",
  "Patricia found the meaning of life in a bowl of Cheerios.",
  "She saw no irony asking me to change but wanting me to accept her for who she is.",
  "The view from the lighthouse excited even the most seasoned traveler.",
  "After fighting off the alligator, Brian still had to face the anaconda.",
  "Pat ordered a ghost pepper pie.",
  "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.",
  "As time wore on, simple dog commands turned into full paragraphs explaining why the dog couldnt do something.",
  "She says she has the ability to hear the soundtrack of your life.",
  "The pigs were insulted that they were named hamburgers.",
  "Hit me with your pet shark!",
  "He had reached the point where he was paranoid about being paranoid.",
];

const sentence = texts[Math.floor(Math.random() * texts.length)];
const words = sentence.split(" ");

export const Typing = ({ onFinish }) => {
  const curIndexRef = React.useRef(0);
  const timerRef = React.useRef(null);
  const [sec, setSec] = React.useState(20);
  const [wordsCount, setWordsCount] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
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
      setInputValue("");
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
      <p className="typing__enter-word">Input word:</p>
      <h3 className="typing__word">{currentWord}</h3>
      <input
        value={inputValue}
        onChange={onChangeInput}
        className={`typing__input ${isError ? "error" : ""}`}
        type="text"
      />
      <div className="typing__progress">
        <div className="typing__timer">
          <p>Time left:</p>
          <b>{sec} sec.</b>
        </div>
        <div className="typing__counter">
          <p>Total words:</p>
          <b>{wordsCount}</b>
        </div>
      </div>
    </div>
  );
};
