const express = require("express");
const router = express.Router();
const { getSingle, update } = require("../models/usuarios");

const getUser = async (req, res) => {
  const [usuario] = await getSingle(req.session.user);
  res.render("usuario", { usuario });
};
const edit = (req, res) => {};

router.get("/", getUser);
router.get("/edit", edit);

module.exports = router;
