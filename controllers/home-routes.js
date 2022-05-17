const express = require("express");
const req = require("express/lib/request");

const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
