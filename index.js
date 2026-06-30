import express from "express";

const app = express();
const port = 3000;

app.get("/", (_request, response) => {
  response.send("Hola mundo desde JavaScript");
});

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
    message: "JavaScript funcionando"
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor JavaScript ejecutándose en http://localhost:${port}`);
});