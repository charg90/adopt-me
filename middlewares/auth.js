const express = require("express");

const verifyUser = (req, res, next) => {
  if (req.session.user) {
    next();
  } else res.render("login", { message: "no estas logeado" });
};

const verifyAdmin = (req, res, next) => {
  if (req.session.admin == 1) {
    next();
  } else {
    res.render("unathorized");
  }
};

module.exports = { verifyUser, verifyAdmin };
