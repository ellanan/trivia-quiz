/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from './Buttons';

export const ModalStartGame = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          /* background-color: #c4bbee; */
          background: rgb(236, 233, 250);
          background: radial-gradient(
            circle,
            rgba(236, 233, 250, 1) 20%,
            rgba(202, 192, 239, 0.9416141456582633) 44%
          );
          align-items: center;
          justify-content: center;
          height: 240px;
          width: 500px;
          border-radius: 10px;
        `}
      >
        <h1>TriviaQuiz</h1>
        <Button>Start Quiz</Button>
      </div>
    </div>
  );
};

export const ModalEndGame = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          /* background-color: #c4bbee; */
          background: rgb(236, 233, 250);
          background: linear-gradient(
            180deg,
            rgba(236, 233, 250, 1) 5%,
            rgba(202, 192, 239, 1) 38%,
            rgba(111, 102, 223, 0.6895133053221288) 100%
          );
          align-items: center;
          justify-content: center;
          height: 240px;
          width: 500px;
          border-radius: 10px;
        `}
      >
        <h1>Congratulations</h1>
        <h3>Score: 0/0</h3>
        <p>Hope you learned something new!</p>
        <Button>Close</Button>
      </div>
    </div>
  );
};
