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
const PORT = process.env.PORT|| 5000;
const server = http.createServer(app);
console.log("hello zorld ");
server.listen(PORT);
// const server = http.createServer(process.env.PORT || 3000);
