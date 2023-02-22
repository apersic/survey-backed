const requests = require("../requests/SurveyRequests");
const requesHandlers = require("./RequestHandlers");

const ServerHandler = (req, res) => {
  const parsedUrl = req.url.replace("/api/v1", "");

  if (parsedUrl === "/survey") {
    console.log("GET questions");

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const data = requests.getSurvey();

    res.end(JSON.stringify(data));
  }

  if (parsedUrl.includes("/answers")) {
    console.log("POST answer request");

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (req.method === "POST") {
      const requestBody = requesHandlers.handlePostRequest(req, res);
    }
  }
};

module.exports = ServerHandler;
