const users = [];
const express = require("express");
const app = express();
const session = require("express-session");
const expbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.engine("handlebars", expbs.engine());
app.set("view engine", "handlebars");

const session = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

router.get("/login", (req, res) => {
  res.render("login");
});
app.listen(3000), console.log("app is running on port 3000");
