const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public/css"));
require("./model/index");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

app.listen(3000, () => {
  console.log("Project Start");
});
