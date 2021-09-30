/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PlayGameButton } from './Buttons';
import { useQuizContext } from '../UseQuizContext';

const startGameBackground =
  require('../images/startGameBackground.svg').default;

export const StartGameScreen = (props: any) => {
  const { dispatchAction } = useQuizContext();

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
          background-image: url(${startGameBackground});
          background-size: cover;
          background-repeat: no-repeat;
          width: calc(100% - 3em);
          max-width: 52em;
          height: auto;
          border-radius: 10px;
          padding: 100px 0;
          color: #fff;
          opacity: 0.8;

          @media (max-width: 450px) {
            width: calc(100% - 30px - 1em);
            min-width: initial;
            height: auto;
          }

          @media (max-height: 600px) {
            margin-top: 7vh;
            width: 80vw;
            height: 18vh;
          }
        `}
      >
        <h1
          css={css`
            font-size: 3.8em;
          `}
        >
          TriviaQuiz
        </h1>
        <PlayGameButton onClick={() => dispatchAction({ type: 'start_game' })}>
          Start Quiz
        </PlayGameButton>
      </div>
    </div>
  );
};
