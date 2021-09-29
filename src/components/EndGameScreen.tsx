/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

import { PlayGameButton } from './Buttons';
import { useQuizContext } from '../UseQuizContext';

const endGameBackground = require('../images/endGameBackground.svg').default;

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
        align-items: flex-start;
        justify-content: center;
        flex-grow: 1;
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
          background-image: url(${endGameBackground});
          width: calc(100% - 3em);
          max-width: 52em;
          height: auto;
          border-radius: 10px;
          padding: 46px 0;
          color: #fff;

          @media (max-width: 880px) {
            background-size: cover;
            width: calc(100% - 40px - 0.3em);
            min-width: initial;
            height: auto;
          }
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
        <PlayGameButton onClick={() => dispatchAction({ type: 'reset' })}>
          Play again
        </PlayGameButton>
      </div>
    </div>
  );
};
