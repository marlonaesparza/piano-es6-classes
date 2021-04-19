const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));

app.get("/", (req, res) => {
  console.log("Serving application assets...");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

