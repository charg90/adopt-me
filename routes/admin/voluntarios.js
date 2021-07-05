const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("./../../services/voluntarios");
const model = require("./../../models/voluntarios");

const getAll = async (req, res) => {
  const voluntarios = await model.getAll();
  res.render("adminVoluntarios", { voluntarios });
};

const create = async (req, res) => {
  console.log(req.body, req.file);
  const idImg = await service.createVoluntario(req.body, req.file);
  res.redirect("/admin/voluntarios");
};

router.get("/", getAll);
router.get("/create", (req, res) => res.render("createVoluntario"));
router.post("/create", upload.single("imagen"), create);
module.exports = router;
