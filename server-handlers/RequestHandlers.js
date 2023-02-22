const requests = require("../requests/SurveyRequests");

const handlePostRequest = (req, res) => {
  let requestBody = "";

  req.on("data", (data) => {
    requestBody += data;
  });

  req.on("end", function () {
    const parsedBody = JSON.parse(requestBody);
    const answers = parsedBody.data.attributes.answers;
    
    const response = requests.submitAnswers(answers);

    res.end(JSON.stringify(response));
  });
};

module.exports = {
  handlePostRequest,
};
