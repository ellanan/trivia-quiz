/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { NextQuestionButton, PossibleAnswerButton } from './Buttons';
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
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          margin-top: 15vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: url(${startBackground});
          background-size: cover;
          background-repeat: no-repeat;
          width: calc(100% - 3em);
          max-width: 52em;
          border-radius: 10px;
          padding-top: 2em;
          padding-bottom: 2em;

          color: #fff;

          @media (min-width: 450px) {
            padding-top: 4em;
            padding-bottom: 4em;
          }

          @media (max-height: 600px) {
            margin-top: 7vh;
            width: 80vw;
            height: 0vh;
            padding: 26vh 2vw;
          }
        `}
      >
        <p
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 2.4em;
            text-align: center;
            font-weight: 700;
            margin-top: 0;
            margin-left: 1em;
            margin-right: 1em;
            min-height: 2.4em;

            @media (max-width: 450px) {
              min-height: 3.6em;
              font-size: 1.4em;
            }

            @media (max-height: 600px) {
              margin: 0;
              min-height: 2.5em;
              font-size: 1.4em;
            }
          `}
        >
          {gameState.currentQuestionIndex + 1}. {currentQuestion.question}
        </p>
        <div
          css={css`
            @media (max-height: 600px) {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 10px;
            }
            * {
              margin-top: 10px;
            }
          `}
        >
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

      <NextQuestionButton
        css={css`
          @media (min-width: 450px) {
            margin-top: 1em;
          }

          @media (max-height: 600px) {
            margin-top: 1em;
          }
        `}
        onClick={() => {
          dispatchAction({
            type: 'next_question',
          });
        }}
      >
        Next Question
      </NextQuestionButton>
    </div>
  );
};
