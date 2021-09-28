import { QuizDataFormat } from '../quizData';
import { Button, ButtonAnswers } from './Buttons';
import { useQuizContext } from '../UseQuizContext';

export type Props = QuizDataFormat & {
  totalScore: number;
  totalQuestions: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  possibleAnswers,
  totalScore,
  callback,
}) => {
  const {
    nextQuestionHandler,
    isButtonDisabled,
    questionNumber,
    totalQuestions,
  } = useQuizContext();

  return (
    <div
      className={
        totalQuestions - 1 === questionNumber && isButtonDisabled
          ? `hideQuestionCard`
          : `showQuestionCard`
      }
    >
      <p>
        Score: {totalScore} / {questionNumber + 1}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {possibleAnswers.map((possibleAnswer) => {
          return (
            <ButtonAnswers
              key={possibleAnswer}
              value={possibleAnswer}
              onClick={callback}
              disabled={isButtonDisabled}
            >
              <span dangerouslySetInnerHTML={{ __html: possibleAnswer }} />
            </ButtonAnswers>
          );
        })}
      </div>
      <Button
        onClick={nextQuestionHandler}
        disabled={questionNumber === totalQuestions - 1 ? true : false}
      >
        Next Question
      </Button>
    </div>
  );
};
