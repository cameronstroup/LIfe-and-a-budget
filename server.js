const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require('path');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3002;
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(routes);

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
  sequelize.sync({
    force: false,
  });
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });
