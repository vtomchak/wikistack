const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const html = require("html-template-tag");
const layout = require("./views/layout");



app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(" "));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in ${PORT}`);
});
