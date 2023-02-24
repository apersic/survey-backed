const Api500Error = require("../error-handlers/Api500Error");
const Api422Error = require("../error-handlers/Api422Error");
const collectionHandler = require("../firebase/CollectionHandler");

const getSurvey = async () => {
  const data = await collectionHandler.getSurveys();

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

const submitAnswers = async (payload) => {
  const errors = [];

  const filmFound = payload.attributes.answers.find((item) => (item.questionId = "film"));
  const reviewFound = payload.attributes.answers.find((item) => (item.questionId = "review"));

  if (reviewFound && filmFound) {
    const response = await collectionHandler.saveAnswers(payload);

    if (response === null) {
      const errors = [
        {
          title: "Internal Server Error",
          detail: "Something went wrong. We're working on it!",
        },
      ];

      return new Api500Error(errors);
    }

    return response;
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