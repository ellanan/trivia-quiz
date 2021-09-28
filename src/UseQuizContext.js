import React, { useState, useContext } from 'react';

import { quizData } from './quizData';

export const QuizContext = React.createContext();

export const QuizContextProvider = ({ children }) => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isGameOverOrNotStarted, setIsGameOverOrNotStarted] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const totalQuestions = quizData.length;

  const startQuizHandler = () => {
    setStartQuiz(true);
    setTotalScore(0);
    setQuestionNumber(0);
    setIsGameOverOrNotStarted(false);
    setIsButtonDisabled(false);
  };

  const nextQuestionHandler = () => {
    setIsButtonDisabled(false);
    setQuestionNumber((prev) => {
      const index = prev + 1;
      if (index > totalQuestions - 1) {
        setIsGameOverOrNotStarted(true);
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswerHandler = (e) => {
    const userAnswer = e.currentTarget.value;
    const userAnsweredCorrectly =
      quizData[questionNumber].correctAnswer === userAnswer;
    if (userAnsweredCorrectly) {
      setTotalScore((preScore) => preScore + 1);
    }

    setIsButtonDisabled(true);
  };

  const closeHandler = () => {
    setStartQuiz(false);
    setQuestionNumber(0);
    setTotalScore(0);
    setIsGameOverOrNotStarted(false);
  };

  return (
    <QuizContext.Provider
      value={{
        startQuizHandler,
        nextQuestionHandler,
        checkAnswerHandler,
        closeHandler,
        startQuiz,
        questionNumber,
        totalScore,
        gameOver: isGameOverOrNotStarted,
        totalQuestions,
        isButtonDisabled,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
