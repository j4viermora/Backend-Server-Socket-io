const ServerExpress = require("./models/server")
require('dotenv').config();
const server = new ServerExpress();

server.execute();


