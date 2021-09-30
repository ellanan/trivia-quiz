export type QuizDataFormat = {
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
};

export const quizData = [
  {
    question: 'Which of the following is not an official language of the UN? ',
    possibleAnswers: ['Hindi', 'Arabic', 'Chinese', 'Russian'],
    correctAnswer: 'Hindi',
  },

  {
    question: 'Which country consumes the most chocolate per capita?',
    possibleAnswers: ['United States', 'Germany', 'Austria', 'Switzerland'],
    correctAnswer: 'Switzerland',
  },
  {
    question: 'Which of Shakespeare’s plays is the longest?',
    possibleAnswers: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'King Lear'],
    correctAnswer: 'Hamlet',
  },
  {
    question: 'The Statue of Liberty was given to the US by which country?',
    possibleAnswers: ['Great Britain', 'France', 'Russia', 'Italy'],
    correctAnswer: 'France',
  },
  {
    question: 'What is the Twitter bird’s official name?',
    possibleAnswers: ['Mark', 'Paul', 'Larry', 'Charles'],
    correctAnswer: 'Larry',
  },
  {
    question: 'What year was the very first model of the iPhone released?',
    possibleAnswers: ['2003', '2005', '2006', '2007'],
    correctAnswer: '2007',
  },
  {
    question: 'How many hearts does an octopus have?',
    possibleAnswers: ['2', '3', '5', '8'],
    correctAnswer: '3',
  },
  {
    question: 'The hit US comedy "Friends" had how many seasons?',
    possibleAnswers: ['12', '10', '8', '4'],
    correctAnswer: '10',
  },
  {
    question: 'What is the national dish of Slovakia?',
    possibleAnswers: ['Bryndzové halušky', 'Ceviche', 'Bigos', 'Prežganka'],
    correctAnswer: 'Bryndzové halušky',
  },
  {
    question: 'Which of the following is not a Marvel character?',
    possibleAnswers: ['Abraxas', 'Blackheart', 'ZZZAX', 'Black Adam'],
    correctAnswer: 'Black Adam',
  },
];
