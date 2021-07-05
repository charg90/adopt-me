const express = require("express");
const router = express.Router();
const model = require("./../../models/galgos");
const modelOrganizacion = require("./../../models/organizacion");

const get = async (req, res) => {
  const galgos = await model.getAll();
  res.render("adminGalgos", { galgos });
};

const sCreate = async (req, res) => {
  const organizacion = await modelOrganizacion.get();
  console.log(organizacion);
  res.render("createGalgo", { organizacion });
};

const create = async (req, res) => {
  const galgo = req.body;
  console.log(galgo);
  const insertId = await model.create(galgo);
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
  const { id } = req.params;
  const galgo = req.body;
  const { insertId } = await model.update(id, galgo);
  console.log(insertId);

  res.redirect("/admin/galgos");
};

const del = async (req, res) => {
  const { id } = req.params;
  const { insertId } = await model.del(id);
  console.log(id);
  console.log(insertId);
  res.redirect("/admin/galgos");
};

router.get("/", get);
router.get("/create", sCreate);
router.post("/create", create);
router.get("/update/:id", sUpdate);
router.post("/update/:id", update);
router.post("/delete/:id", del);
module.exports = router;
