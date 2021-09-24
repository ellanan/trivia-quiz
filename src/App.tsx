/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

import { questions } from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [close, setClose] = useState(false);

  const nextQuestionHandler = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const startQuizHandler = () => {
    setStartQuiz(true);
  };

  const closeHandler = () => {
    setClose(true);
  };

  return (
    <div>
      <h1>TriviaQuiz</h1>
      <p>Score: 0</p>
      <button onClick={startQuizHandler}>Start</button>
      <button onClick={nextQuestionHandler}>Next Question</button>
      <button onClick={closeHandler}>Close</button>

      {questions.map((Question) => {
        return (
          <div key={Question.question}>
            <p>{Question.question}</p>
            {Question.possibleAnswers.map((possibleAnswer) => {
              return (
                <button
                  key={possibleAnswer}
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #bef5ec;
                  `}
                >
                  {possibleAnswer}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
