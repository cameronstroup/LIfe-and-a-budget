<<<<<<< HEAD
const router = require('express').Router();
const homeRoutes = require('./home-routes');

const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
=======
const router = require("express").Router();
>>>>>>> 436dfe3f1a6eaad1e87ffc89d801640bbf7a50a7

const apiRoutes = require("./api");
const htmlroutes = require("./home-routes");
router.use("/api", apiRoutes);
router.use("/", htmlroutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
