const requestHandlers = require("./RequestHandlers");

const ServerHandler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const parsedUrl = req.url.replace("/api/v1", "");

  if (parsedUrl === "/survey") {
    console.log("GET questions");

    requestHandlers.handleGetRequest(req, res);
  }

  if (parsedUrl.includes("/answers")) {
    console.log("POST answers request");

    requestHandlers.handlePostRequest(req, res);
  }
};

module.exports = ServerHandler;
