const requests = require("../requests/SurveyRequests");

const handleGetRequest = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  requests.getSurvey().then((data) => {
    res.end(JSON.stringify(data));
  });
}

const handlePostRequest = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  let requestBody = "";

  req.on("data", (data) => {
    requestBody += data;
  });

  req.on("end", async () => {
    const parsedBody = JSON.parse(requestBody);

    const response = await requests.submitAnswers(parsedBody.data);

    res.end(JSON.stringify(response));
  });
};

module.exports = {
  handleGetRequest,
  handlePostRequest,
};
