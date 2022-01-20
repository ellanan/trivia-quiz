import _ from 'lodash';
import React, { PropsWithChildren, useReducer } from 'react';

import { quizData } from './quizData';

interface MutableGameState {
  isStarted: boolean;
  isGameOver: boolean;
  questions: typeof quizData;
  answers: Array<string | null>;
  currentQuestion: typeof quizData[number] | null;
}

type GameAction =
  | {
      type: 'start_game';
    }
  | { type: 'submit_answer'; selectedAnswer: string }
  | {
      type: 'next_question';
    }
  | {
      type: 'reset';
    };

const INITIAL_GAME_STATE = {
  isStarted: false,
  isGameOver: false,
  questions: [],
  answers: [],
  selectedAnswer: null,
  currentQuestion: null,
};

const quizReducer = (currentState: MutableGameState, action: GameAction) => {
  switch (action.type) {
    case 'start_game':
      const questions = _.sampleSize(quizData, 3).map((data) => ({
        ...data,
        possibleAnswers: _.shuffle(data.possibleAnswers),
      }));
      return {
        ...INITIAL_GAME_STATE,
        isStarted: true,
        currentQuestion: questions[0],
        questions,
      };

    case 'submit_answer': {
      const answers = currentState?.answers.concat(action.selectedAnswer);
      return {
        ...currentState,
        answers,
      };
    }

    case 'next_question': {
      const currentQuestionIndex = currentState.currentQuestion
        ? currentState.questions.indexOf(currentState.currentQuestion)
        : 0;
      if (currentQuestionIndex === currentState.questions.length - 1) {
        return {
          ...currentState,
          currentQuestion: null,
          isGameOver: true,
        };
      }
      return {
        ...currentState,
        currentQuestion: currentState.questions[currentQuestionIndex + 1],
        selectedAnswer: null,
      };
    }

    case 'reset':
      return INITIAL_GAME_STATE;

    default:
      console.error(`Unhandled action:`, { action });
      throw new Error(`Unhandled action`);
  }
};

//////////////////////////////////////////////////////////////////////////

const useQuizState = () => {
  const [gameState, dispatchAction] = useReducer(
    quizReducer,
    INITIAL_GAME_STATE
  );

  const correctlyAnsweredQuestions = gameState.questions.filter(
    (question, index) => {
      return question.correctAnswer === gameState.answers[index];
    }
  );
  const currentQuestionIndex = gameState.currentQuestion
    ? gameState.questions.indexOf(gameState.currentQuestion)
    : 0;

  return {
    gameState: {
      ...gameState,
      correctlyAnsweredQuestions,
      currentQuestionIndex,
    },
    dispatchAction,
  };
};

export const QuizContext = React.createContext<ReturnType<
  typeof useQuizState
> | null>(null);

export const QuizContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const gameState = useQuizState();

  return (
    <QuizContext.Provider value={gameState}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = React.useContext(QuizContext);

  if (!context) {
    throw new Error(`useQuizContext must be used within a QuizContext`);
  }
  return context;
};
