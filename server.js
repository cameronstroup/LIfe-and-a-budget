const users = [];
const express = require("express");
const app = express();
const session = require("express-session");
app.listen(3000), console.log("app is running on port 3000");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  console.log(req.session), res.render("index.ejs");
});
