const { schemas } = require("./schemas/organizacion");

const validateOrganizacion = (req, res, next) => {
  const { error, value } = schemas.organizacion.validate(req.body);
  error
    ? res.render("updateOrganizacion", { message: error.details[0].message })
    : next();
};

module.exports = { validateOrganizacion };
