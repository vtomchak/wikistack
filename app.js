const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (res, req) => {
  res.send("hello world");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in ${PORT}`);
});
