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

const del = async (req, res) => {
  const { id } = req.params;
  const msgVoluntarios = await model.delVol(id);
  const msgImg = await model.delVolImg(id);
  res.redirect("/admin/voluntarios");
};
const getUpdate = async (req, res) => {
  const { id } = req.params;
  const [voluntario] = await model.getSingle(id);
  console.log(voluntario);
  res.render("voluntarioUpdate", { voluntario });
};

const update = async (req, res) => {
  const idImg = await service.updateVoluntario(
    req.params.id,
    req.body,
    req.file
  );
  res.redirect("/admin/voluntarios");
};

router.get("/", getAll);
router.get("/create", (req, res) => res.render("createVoluntario"));
router.post("/create", upload.single("imagen"), create);
router.get("/delete/:id", del);
router.get("/update/:id", getUpdate);
router.post("/update/:id", upload.single("imagen"), update);
module.exports = router;
