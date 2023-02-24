const requestHandlers = require("./RequestHandlers");

const ServerHandler = (req, res) => {
  const parsedUrl = req.url.replace("/api/v1", "");

  if (parsedUrl === "/survey") {
    console.log("GET questions");

    requestHandlers.handleGetRequest(req, res);
  }

  if (parsedUrl.includes("/answers")) {
    console.log("POST answers request");

    if (req.method === "POST") {
      requestHandlers.handlePostRequest(req, res);
    }
  }
};

module.exports = ServerHandler;
