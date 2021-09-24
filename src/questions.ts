export type Question = {
  questionID: string;
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
};

export const questions = [
  {
    questionID: 'q01',
    question: 'What is the rarest M&M color?',
    possibleAnswers: ['blue', 'red', 'brown', 'yellow'],
    correctAnswer: 'brown',
  },
  {
    questionID: 'q02',
    question: 'Which of the following is not an official language of the UN? ',
    possibleAnswers: ['Hindi', 'Arabic', 'Chinese', 'Russian'],
    correctAnswer: 'Hindi',
  },
  {
    questionID: 'q03',
    question: 'What is Lady Gaga’s real name?',
    possibleAnswers: [
      'Stefani Joanne Angelina Germanotta',
      'Ashley Frangipane',
      'Melissa Jefferson',
      'Amethyst Amelia Kelly',
    ],
    correctAnswer: 'Stefani Joanne Angelina Germanotta',
  },
  {
    questionID: 'q04',
    question: 'Which country consumes the most chocolate per capita?',
    possibleAnswers: ['United States', 'Germany', 'Austria', 'Switzerland'],
    correctAnswer: 'Switzerland',
  },
  {
    questionID: 'q05',
    question: 'Which of Shakespeare’s plays is the longest?',
    possibleAnswers: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'King Lear'],
    correctAnswer: 'Hamlet',
  },
  {
    questionID: 'q06',
    question: 'The Statue of Liberty was given to the US by which country?',
    possibleAnswers: ['Great Britain', 'France', 'Russia', 'Italy'],
    correctAnswer: 'France',
  },
  {
    questionID: 'q07',
    question: 'What is the Twitter bird’s official name?',
    possibleAnswers: ['Mark', 'Paul', 'Larry', 'Charles'],
    correctAnswer: 'Larry',
  },
  {
    questionID: 'q08',
    question: 'What year was the very first model of the iPhone released?',
    possibleAnswers: ['2003', '2005', '2006', '2007'],
    correctAnswer: '2007',
  },
  {
    questionID: 'q09',
    question: 'How many hearts does an octopus have?',
    possibleAnswers: ['2', '3', '5', '8'],
    correctAnswer: '3',
  },
  {
    questionID: 'q10',
    question: 'The hit US comedy "Friends" had how many seasons?',
    possibleAnswers: ['12', '10', '8', '4'],
    correctAnswer: '',
  },
];
