const express = require("express");
const cardsRoutes = require("./routes/cards");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("server is here");
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use("/cards", cardsRoutes);
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
