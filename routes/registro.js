const express = require("express");
const router = express.Router();
const model = require("./../models/usuarios");
const sha1 = require("sha1");
const { v4: uuid } = require("uuid");
const { send } = require("./../services/mail");
const { validateRegister } = require("./../middlewares/usuarios");

const register = (req, res) => {
  res.render("registro");
};

const create = async (req, res) => {
  const usuario = req.body;

  const uid = uuid();

  const usuarioFinal = {
    username: usuario.username,
    pass: sha1(usuario.pass),
    mail: usuario.mail,
    confirmacionCorreo: uid,
    telefono: usuario.telefono,
  };

  const agregado = await model.create(usuarioFinal);

  send({
    mail: usuarioFinal.mail,
    cuerpo: `<h1> Gracias por registrarte en Adopt Me</h1>
     <a href="${process.env.URL_SERVER}:${process.env.URL_PORT}/registro/verify/${uid}">Por favor hacer click aqui ${usuarioFinal.username}, para confimar el tu cuenta</a>`,
  });
  res.redirect("/");
};
const verify = async (req, res) => {
  const { uid } = req.params;
  console.log(uid);
  const messageId = await model.verify(uid);
  res.redirect("/galgos");
};

router.get("/", register);
router.post("/", validateRegister, create);
router.get("/verify/:uid", verify);
module.exports = router;
