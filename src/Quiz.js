import { useState } from "react";
import { resultInitialState } from "./constants";
import yuno_guy from "./images/y-u-no-guy.jpg";
import happy_dog from "./images/happy_dog.png";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [results, setResults] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      //changed from correctAnswer to true
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  //   const onAnswerClick = (answer, index) => {
  //     setAnswerIdx(index);
  //     if (answer === "Yes") {
  //       //changed from correctAnswer to true
  //       setAnswer(true);
  //     } else {
  //       setAnswer(false);
  //     }
  //   };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResults((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 1,
            yesAnswers: prev.yesAnswers + 1,
          }
        : {
            ...prev,
            noAnswers: prev.noAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-questions">/{questions.length}</span>

          <h2 className="quiz-question">{question}</h2>
          <ul>
            {/* <li
              key={answer}
              onClick={(answer) => onAnswerClick(answer)}
            //   className={answerIdx === index ? "selected-answer" : null}
            >
              Yes
            </li> */}
            {/* <li key={no}>No</li> */}
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? "selected-answer" : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Score: <span>{results.score}</span>
          </p>
          {/* <p>
            Yes Answers: <span>{results.yesAnswers}</span>
          </p>
          <p>
            No Answers: <span>{results.noAnswers}</span>
          </p> */}

          {results.yesAnswers > results.noAnswers ? (
            <>
              <img src={yuno_guy} alt="y-u-no-guy" />
              <p>
                Wow, you're really mad at me. I'm sorry. Can I take you to
                dinner?
              </p>
            </>
          ) : (
            <>
              <img src={happy_dog} alt="happy-dog" />
              <p>
                Wow, you're not mad at me. Phew!! Can I take you to dinner
                anyway?
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
