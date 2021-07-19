const express = require("express");
const router = express.Router();
const { get, getSingle, update, del } = require("./../../models/organizacion");
const { validateOrganizacion } = require("./../../middlewares/organizacion");

const sOrganizacion = async (req, res) => {
  const organizacion = await get();
  res.render("adminOrganizacion", { organizacion });
};

const updateShow = async (req, res) => {
  const id = req.params.id;
  const [organizacion] = await getSingle(id);

  res.render("updateOrganizacion", { organizacion });
};

const updatePost = async (req, res) => {
  const organizacion = req.body;
  const id = req.params.id;
  const { insertId } = await update(organizacion, id);
  console.log(insertId);
  res.redirect("/admin/organizacion");
};

const delOrg = async (req, res) => {
  const { id } = req.params;
  const msgOrg = await del(id);
  res.redirect("/admin/organizacion");
};

router.get("/", sOrganizacion);
router.get("/update/:id", updateShow);
router.post("/update/:id", validateOrganizacion, updatePost);
router.get("/delete/:id", delOrg);
module.exports = router;
