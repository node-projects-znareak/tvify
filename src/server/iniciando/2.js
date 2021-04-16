const http = require("http");
const port = process.env.PORT || 3000;
const { file } = require("../assets/helpers");

const server = http.createServer((req, res) => {
  console.log("peticion:", req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      file("index.html", res);
      break;

    case "/app.js":
      res.setHeader("Content-Type", "text/javascript");
      file("app.js", res);

      break;

    case "/app.css":
      res.setHeader("Content-Type", "text/css");
      file("app.css", res);
      break;
  
    default:
      res.statusCode = 404;
      res.end("");
      break;
  }
});

server.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
