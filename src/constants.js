export const jsQuiz = {
  questions: [
    // {
    //   "id": 0,
    //   "question":
    //     "______ provide a way to pass data from one component to another. Fill in the blank.",
    //   "type": "FIB",
    //   "correctAnswer": "props",
    // },
    {
      "id": 1,
      "question":
        "Are you mad at me because I described you as 'cottage cheese'?",
      "choices": [
        "Yes",
        "No",
        // "Both A and B",
        // "None of the above",
      ],
      "type": "MCQs",
      "correctAnswer": "Yes",
    },
    {
      "id": 2,
      "question": "Are you mad at me because I didn't do the dishes?",
      "choices": ["Yes", "No"],
      "type": "MCQs",
      "correctAnswer": "Yes",
    },
    {
      "id": 3,
      "question":
        "Are you mad at me for because I said your foot injury was 'cute'?",
      "choices": ["Yes", "No"],
      "type": "MCQs",
      "correctAnswer": "Yes",
    },
    {
      "id": 4,
      "question": "Are you mad at me because I didn't buy you a Tesla?",
      "choices": ["Yes", "No"],
      "type": "MCQs",
      "correctAnswer": "Yes",
    },
    {
      "id": 5,
      "question": "Are you mad at me for ruining your surprise party, again?",
      "choices": ["Yes", "No"],
      "type": "MCQs",
      "correctAnswer": "Yes",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  yesAnswers: 0,
  noAnswers: 0,
};

export const yesOrNo = {
  yes: "Yes",
  no: "No",
};
