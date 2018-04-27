const { createServer } = require('http');
const { SERVER_PORT } = require('./util/constants');
const { logServerListening } = require('./util/logging');
const startLurchBot = require('./bots/lurch');
const server = createServer(() => {});

server.listen(SERVER_PORT, () => {
  logServerListening(SERVER_PORT);
  startLurchBot();
});
