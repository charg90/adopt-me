const Joi = require("joi");

const schemas = {
  login: Joi.object().keys({
    username: Joi.string().required().messages({
      "string.empty": "El username es obligatorio",
    }),
    pass: Joi.string().min(3).max(20).required().messages({
      "string.required": "Password es obligatorio",
      "string.min": "tiene que tener mas de 3 caracteres",
      "string.max": "tiene que tener menos de 20 caracteres",
    }),
  }),
  registro: Joi.object().keys({
    username: Joi.string().required(),
    pass: Joi.string().min(3).max(20).required(),
    mail: Joi.string().email().required(),
    telefono: Joi.number().required(),
  }),
};

module.exports = { schemas };
