/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

import { Button } from './Buttons';
import { useQuizContext } from '../UseQuizContext';

export const EndGameScreen = () => {
  const { gameState, dispatchAction } = useQuizContext();

  useEffect(() => {
    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 120,
        colors: [
          '#41d9d3',
          '#ffc18f',
          '#798FBB',
          '#B0BEF7',
          '#DEE2E7',
          '#7A92F0',
          '#B4C3DB',
        ],
      });
    }, 0);

    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        colors: [
          '#41d9d3',
          '#ffc18f',
          '#798FBB',
          '#B0BEF7',
          '#DEE2E7',
          '#7A92F0',
          '#B4C3DB',
        ],
      });
    }, 400);

    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 160,
        colors: [
          '#41d9d3',
          '#ffc18f',
          '#798FBB',
          '#B0BEF7',
          '#DEE2E7',
          '#7A92F0',
          '#B4C3DB',
        ],
      });
    }, 750);
  }, []);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background: rgb(236, 233, 250);
          background: linear-gradient(
            180deg,
            rgba(236, 233, 250, 1) 5%,
            rgba(202, 192, 239, 1) 38%,
            rgba(111, 102, 223, 0.6895133053221288) 100%
          );
          align-items: center;
          justify-content: center;
          height: 28em;
          width: 50em;
          border-radius: 10px;
          padding: 18px 0;
          color: #4940b6;
        `}
      >
        <h1
          css={css`
            font-size: 3.8em;
          `}
        >
          Great job!
        </h1>
        <h3>
          You answered: {gameState.correctlyAnsweredQuestions.length} /
          {gameState.questions.length} correctly.
        </h3>
        <p>Hope you learned something new!</p>
        <Button onClick={() => dispatchAction({ type: 'reset' })}>
          Play again
        </Button>
      </div>
    </div>
  );
};
