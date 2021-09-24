/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css';

import { questions } from '../questions';
import { Button, ButtonAnswers } from './Buttons';

export const QuestionCard = () => {
  return (
    <div>
      <p>Score: 0</p>
      {questions.map((Question) => {
        return (
          <div key={Question.question}>
            <p>{Question.question}</p>
            {Question.possibleAnswers.map((possibleAnswer) => {
              return (
                <ButtonAnswers
                  key={possibleAnswer}
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  {possibleAnswer}
                </ButtonAnswers>
              );
            })}
          </div>
        );
      })}
      <Button>Next Question</Button>
    </div>
  );
};
