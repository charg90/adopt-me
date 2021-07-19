var express = require("express");
var router = express.Router();
const { getAll, getSingle } = require("../models/galgos");

const get = async (req, res) => {
  const galgos = await getAll();
  console.log(galgos);
  res.render("index", { galgos });
};

router.get("/", get);

module.exports = router;
