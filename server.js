const http = require("http");
const app = require("./App");
try {
  dotenv = require("dotenv");
} catch (error) {
  console.log("disabled dotenv problem");
}

dotenv.config({
  path: "./config/config.env",
});
const PORT = 5000;
const server = http.createServer(app);
server.listen(PORT);
