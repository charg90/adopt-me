const express = require("express");
const router = express.Router();
const { getAll, getSingle } = require("../models/galgos");

const get = async (req, res, next) => {
  const galgos = await getAll();
  console.log(galgos);
  res.render("galgos", { galgos });
};

const single = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const [galgo] = await getSingle(id);
  console.log(galgo);
  res.render("galgo", { galgo });
};

router.get("/", get);
router.get("/single/:id", single);
module.exports = router;
