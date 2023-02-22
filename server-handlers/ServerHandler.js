const ServerHandler = (req, res) => {
  const parsedUrl = req.url.replace("/api/v1", "");

  if (parsedUrl === "/survey") {
    console.log("GET questions");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("GET survey data");
  }

  if (parsedUrl.includes("/answers")) {
    console.log("POST answer request");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("POST answer request");
  }
};

module.exports = ServerHandler;
