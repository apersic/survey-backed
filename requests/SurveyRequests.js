const Api500Error = require("../error-handlers/Api500Error");
const Api422Error = require("../error-handlers/Api422Error");
const mockedResponse = require("../mock-data/MockPOSTResponse");

const getSurvey = () => {
  const data = require("../mock-data/MockQuestions");

  if (data === null) {
    const errors = [
      {
        title: "Internal Server Error",
        detail: "Something went wrong. We're working on it!",
      },
    ];

    return new Api500Error(errors);
  }

  return data;
};

const submitAnswers = (data) => {
  const errors = [];

  const filmFound = data.find((item) => (item.questionId = "film"));
  const reviewFound = data.find((item) => (item.questionId = "review"));

  if (reviewFound && filmFound) {
    return mockedResponse;
  }

  if (!filmFound) {
    errors.push({
      source: { pointer: "data/attributes/answers/film" },
      detail: "The value is required",
    });
  }

  if (!reviewFound) {
    errors.push({
      source: { pointer: "data/attributes/answers/review" },
      detail: "The value is required",
    });
  }

  return new Api422Error(errors);
};

module.exports = {
  getSurvey,
  submitAnswers,
};