import express from "express";
import api from "./api/index";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/tvify", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("open", () => {
  console.log("Se establecio la conexion con mongodb\n");
});
  
// middlware que se ejecuta en cada request
// busca archivos estaticos para mostrarlos al frontend
app.use(express.static("public"));
app.use("/api", api);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
