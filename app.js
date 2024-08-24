require("dotenv").config();
const express = require("express");
const { blogs } = require("./model/index");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public/css"));

require("./model/index");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  const { title, subtitle, description } = req.body;
  await blogs.create({
    title,
    subtitle,
    description,
  });
  res.send("Blog added Successfully");
});
app.listen(3000, () => {
  console.log("Project Start");
});
