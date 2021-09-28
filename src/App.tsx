import { QuestionCard } from './components/QuestionCard';
import { StartGameModal, EndGameModal } from './components/Modal';
import { Footer } from './components/Footer';
import { quizData } from './quizData';
import { useQuizContext } from './UseQuizContext';

const App = () => {
  const {
    checkAnswerHandler,
    startQuiz,
    questionNumber,
    totalScore,
    isGameOverOrNotStarted,
    totalQuestions,
    isButtonDisabled,
  } = useQuizContext();

  return (
    <div>
      {!startQuiz ? <StartGameModal /> : null}
      {!isGameOverOrNotStarted && startQuiz ? (
        <QuestionCard
          questionID={quizData[questionNumber].questionID}
          question={quizData[questionNumber].question}
          possibleAnswers={quizData[questionNumber].possibleAnswers}
          correctAnswer={quizData[questionNumber].correctAnswer}
          totalQuestions={totalQuestions}
          totalScore={totalScore}
          callback={checkAnswerHandler}
        />
      ) : null}
      {isButtonDisabled && questionNumber === totalQuestions - 1 ? (
        <EndGameModal />
      ) : null}

      <Footer />
    </div>
  );
};

export default App;
