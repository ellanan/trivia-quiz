/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { StartButton } from './Buttons';
import { useQuizContext } from '../UseQuizContext';

const startGameBackground =
  require('../images/startGameBackground.svg').default;

export const StartGameScreen = (props: any) => {
  const { dispatchAction } = useQuizContext();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background-image: url(${startGameBackground});
          background-size: cover;
          align-items: center;
          justify-content: center;
          height: 28em;
          width: 50em;
          border-radius: 10px;
          padding: 18px 0;
          color: white;
          opacity: 0.8;
        `}
      >
        <h1
          css={css`
            font-size: 3.8em;
          `}
        >
          TriviaQuiz
        </h1>
        <StartButton onClick={() => dispatchAction({ type: 'start_game' })}>
          Start Quiz
        </StartButton>
      </div>
    </div>
  );
};
