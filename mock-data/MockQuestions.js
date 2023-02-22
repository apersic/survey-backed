const data = [
  {
    questionId: "film",
    questionType: "text",
    label: "What film did you watch?",
    required: true,
    attributes: null,
  },
  {
    questionId: "review",
    questionType: "rating",
    label: "How would you rate the film? (1 - Very bad, 5 - Very good)",
    required: true,
    attributes: {
      min: 1,
      max: 5,
    },
  },
];

module.exports = data;
