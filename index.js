const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(express.json());
app.use(require("./routes/book"))
app.use(require("./routes/genre"))
app.use(require("./routes/review"))

mongoose
  .connect(
    "mongodb+srv://JuniorTIM:03032004Asum@cluster0.kzst7.mongodb.net/booksShop?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});