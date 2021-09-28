import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QuizContextProvider } from './UseQuizContext';

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
