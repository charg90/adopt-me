const Joi = require("joi");

const schemas = {
  organizacion: Joi.object().keys({
    nombre: Joi.string().min(3).max(10).required().messages({
      "string.empty": "El nombre es obligatorio",
      "string.min": "debe tener mas de 3 caracteres",
      "string.max": "debe tener menos de 10 caracteres",
    }),
    telefono: Joi.number().required().messages({
      "number.empty": "el numero es obligatorio",
    }),
    direccion: Joi.string().min(3).max(20).required().messages({
      "string.empty": "El mail es obligatorio",
      "string.min": "debe tener mas de 3 caracteres",
      "string.max": "debe tener menos de 10 caracteres",
    }),
  }),
};

module.exports = { schemas };
