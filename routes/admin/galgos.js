const express = require("express");
const router = express.Router();
const model = require("./../../models/galgos");
const modelOrganizacion = require("./../../models/organizacion");
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("./../../services/galgos");
const {
  validateGalgo,
  validateUpdateGalgo,
} = require("./../../middlewares/galgos");

const get = async (req, res) => {
  const galgos = await model.getAll();
  console.log(galgos);
  res.render("adminGalgos", { galgos });
};

const sCreate = async (req, res) => {
  const organizacion = await modelOrganizacion.get();
  console.log(organizacion);
  res.render("createGalgo", { organizacion });
};

const create = async (req, res) => {
  const galgo = req.body;
  const idImg = await service.createGalgo(req.body, req.file);

  res.redirect("/admin/galgos");
};

const sUpdate = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const [galgo] = await model.getSingle(id);
  console.log(galgo);
  const organizacion = await modelOrganizacion.get();
  res.render("updateGalgo", { galgo, organizacion });
};
const update = async (req, res) => {
  const idImg = await service.updateGalgo(req.params.id, req.body, req.file);
  res.redirect("/admin/galgos");
};

const del = async (req, res) => {
  const { id } = req.params;
  const msgGalgo = await model.del(id);
  const delImg = await model.delImg(id);
  res.redirect("/admin/galgos");
};

router.get("/", get);
router.get("/create", sCreate);
router.post("/create", upload.single("imagen"), create);
router.get("/update/:id", sUpdate);
router.post(
  "/update/:id",
  validateUpdateGalgo,
  upload.single("imagen"),
  update
);
router.get("/delete/:id", del);
module.exports = router;
