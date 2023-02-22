const http = require("http");

const config = require("./config");
const handler = require("./server-handlers/ServerHandler");

const server = http.createServer(handler);

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
