/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { QuestionCard } from './components/QuestionCard';
import { StartGameScreen, EndGameScreen } from './components/StartEndScreens';
import { Footer } from './components/Footer';
import { useQuizContext } from './UseQuizContext';

const Game = () => {
  const { gameState } = useQuizContext();
  if (!gameState.isStarted) {
    return <StartGameScreen />;
  } else if (gameState.isGameOver) {
    return <EndGameScreen />;
  }

  return <QuestionCard />;
};

const App = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      `}
    >
      <Game />
      <Footer />
    </div>
  );
};

export default App;
