const express = require("express");
const router = express.Router();

const adminIndex = (req, res) => res.render("admin");

router.get("/", adminIndex);
module.exports = router;
