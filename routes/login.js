const express = require("express");
const router = express.Router();
const { auth } = require("./../models/usuarios");
const sha1 = require("sha1");

const Slogin = (req, res) => res.render("login");

const login = async (req, res) => {
  let { username, pass } = req.body;
  pass = sha1(pass);
  const logged = await auth(username, pass);

  if (logged.length === 0) {
    res.redirect("login");
  } else {
    res.redirect("/admin/index");
  }
};

router.get("/", Slogin);
router.post("/", login);
module.exports = router;
