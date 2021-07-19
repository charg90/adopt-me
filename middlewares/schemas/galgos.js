const Joi = require("joi");

const schemas = {
  galgo: Joi.object().keys({
    nombre: Joi.string().min(3).max(10).required().messages({
      "string.empty": "El nombre es obligatorio",
      "string.min": "tiene que tener mas de 3 caracteres",
      "string.max": "tiene que tener menos de 20 caracteres",
    }),
    edad: Joi.number().required(),

    descripcion: Joi.string().min(10).max(50).required().messages({
      "string.empty": "La descripcion es obligatorio",
      "string.min": "tiene que tener mas de 10 caracteres",
      "string.max": "tiene que tener menos de 50 caracteres",
    }),
    color: Joi.string().min(3).max(10).required().messages({
      "string.empty": "El color es obligatorio",
      "string.min": "tiene que tener mas de 3 caracteres",
      "string.max": "tiene que tener menos de 20 caracteres",
    }),
  }),
};
module.exports = { schemas };
