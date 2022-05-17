const express = require("express");
const req = require("express/lib/request");

const router = require("express").Router();

router.get("/login", (req, res) => {
  //   if (req.session.logged) {
  //     res.redirect("/");
  //     return;
  //   }
  res.render("login");
});

module.exports = router;
