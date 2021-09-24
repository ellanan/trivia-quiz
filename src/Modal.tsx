/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Modal = () => {
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
          background-color: #c4bbee;
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
        <button
          css={css`
            height: 30px;
            width: 60px;
          `}
        >
          Close
        </button>
      </div>
    </div>
  );
};
