const express = require("express");
const router = express.Router();
const { auth } = require("./../models/usuarios");
const sha1 = require("sha1");
const { validateLogin } = require("./../middlewares/usuarios");

const slogin = (req, res) => res.render("login");

const login = async (req, res) => {
  let { username, pass } = req.body;
  pass = sha1(pass);
  const logged = await auth(username, pass);
  const [{ id, admin }] = logged;
  console.log(logged);
  console.log(id);

  if (logged.length === 0) {
    res.render("login", { message: "usuario o pass incorrectos" });
  } else if ((req.session.user = id && admin == 0)) {
    req.session.user = id;

    res.redirect("/usuario");
  } else if ((req.session.admin = admin)) {
    req.session.admin = admin;
    res.redirect("/admin");
  }
};

router.get("/", slogin);
router.post("/", validateLogin, login);
module.exports = router;
