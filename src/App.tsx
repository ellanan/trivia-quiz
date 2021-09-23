import React from 'react';

import { questions } from './questions';

function App() {
  return (
    <div>
      <h1>TriviaQuiz</h1>
      <p>Score: 0</p>
      <button>Start</button>
      <>
        {questions.map((question, index) => {
          return (
            <ul>
              <li>
                {question.question}
                {questions.map((question, index) => {
                  return (
                    <ul>
                      <li>{question.possibleAnswers[index]}</li>
                      <li>{question.possibleAnswers[index + 1]}</li>
                      <li>{question.possibleAnswers[index + 2]}</li>
                      <li>{question.possibleAnswers[index + 3]}</li>
                    </ul>
                  );
                })}
              </li>
            </ul>
          );
        })}
      </>
      <button>Next Question</button>
      <button>Close</button>
    </div>
  );
}

export default App;
