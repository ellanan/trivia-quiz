/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button, PossibleAnswerButton } from './Buttons';
import { useQuizContext } from '../UseQuizContext';

const startBackground = require('../images/questionCardBackground.svg').default;

export const QuestionCard = () => {
  const { gameState, dispatchAction } = useQuizContext();
  const currentQuestion = gameState.currentQuestion;
  const hasSubmittedAnswerForCurrentQuestion =
    gameState.answers[gameState.currentQuestionIndex] !== undefined;

  if (!currentQuestion) {
    return null;
  }
  return (
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          height: 28em;
          width: 50em;
          background-image: url(${startBackground});
          padding: 6px 30px;
          color: #fff;
        `}
      >
        <p
          css={css`
            font-size: 2.4em;
            text-align: center;
            font-weight: 700;
          `}
        >
          {gameState.currentQuestionIndex + 1}. {currentQuestion.question}
        </p>
        <div>
          {currentQuestion.possibleAnswers.map((possibleAnswer) => {
            return (
              <PossibleAnswerButton
                css={[
                  possibleAnswer ===
                    gameState.answers[gameState.currentQuestionIndex] &&
                    css`
                      background-color: #e7c7f2;
                    `,
                  hasSubmittedAnswerForCurrentQuestion &&
                    currentQuestion.correctAnswer === possibleAnswer &&
                    css`
                      background-color: #b5e391;
                    `,
                  hasSubmittedAnswerForCurrentQuestion &&
                    possibleAnswer ===
                      gameState.answers[gameState.currentQuestionIndex] &&
                    currentQuestion.correctAnswer !==
                      gameState.answers[gameState.currentQuestionIndex] &&
                    css`
                      text-decoration: line-through;
                    `,
                ]}
                key={possibleAnswer}
                value={possibleAnswer}
                onClick={() => {
                  if (hasSubmittedAnswerForCurrentQuestion) {
                    return;
                  }
                  dispatchAction({
                    type: 'submit_answer',
                    selectedAnswer: possibleAnswer,
                  });
                }}
              >
                {possibleAnswer}
              </PossibleAnswerButton>
            );
          })}
        </div>
      </div>

      <Button
        onClick={() => {
          dispatchAction({
            type: 'next_question',
          });
        }}
      >
        Next Question
      </Button>
    </div>
  );
};
