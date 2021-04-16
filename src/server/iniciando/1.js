const fs = require("fs");

fs.readFile("../tvify/public/index.html", (err, data) => {
  if (err) {
    throw new Error("No es posible abrir el dicho", err.message);
  }
  console.log(data.toString().length);
});

console.log("Se leyo el archivo");
