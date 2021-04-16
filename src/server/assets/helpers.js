const fs = require("fs");

function file(path, res) {
  fs.readFile("../tvify/public/" + path, (err, data) => {
    if (err) {
      res.end("Fatal error in read the file: " + path);
      process.exit(1);
    }

    res.end(data.toString());
  });
}

module.exports = { file };
