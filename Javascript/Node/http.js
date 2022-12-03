const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
  console.log("Hi");
});

server.listen(port, function (error) {
  if (error) {
    console.log("Erro. Server não iniciou corretamente", error);
  } else {
    console.log("Tudo certo chefia: PORT: " + port);
  }
});
