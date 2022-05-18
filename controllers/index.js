const router = require('express').Router();

const apiRoutes = require("./api");
const htmlroutes = require("./home-routes");
router.use("/api", apiRoutes);
router.use("/", htmlroutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
