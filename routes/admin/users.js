const express = require("express");
const router = express.Router();
const model = require("./../../models/usuarios");
const { validateUsers } = require("./../../middlewares/users");

const userShow = async (req, res) => {
  const usuarios = await model.getAll();
  res.render("adminUsers", { usuarios });
};
const updateGet = async (req, res) => {
  const id = req.params.id;
  const [user] = await model.getSingle(id);
  res.render("updateUsers", { user });
};
const updatePost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = req.body;
  const updateUser = await model.update(user, id);
  res.redirect("updateUsers");
};

const delUser = async (req, res) => {
  const id = req.params.id;
  const userDelete = await model.del(id);
};
router.get("/", userShow);
router.get("/update/:id", updateGet);
router.post("/update/:id", validateUsers, updatePost);
router.get("/delete/:id", delUser);

module.exports = router;
