const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");

const port = 4000;
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use("/", routes);

// Маршрут для индексного HTML файла
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

mongoose
  .connect(
    "mongodb+srv://Nektarin:6258210qwe@cluster0.tf5yuoy.mongodb.net/RTK?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(
        chalk.green(
          `Сервер будет доступен по адресу http://localhost:4000/ приятного просмотра :) порт ${port}...`
        )
      );
    });
  });
