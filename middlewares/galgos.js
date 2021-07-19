const { schemas } = require("./schemas/galgos");

const validateGalgo = (req, res, next) => {
  const { error, value } = schemas.galgo.validate(req.body);
  error
    ? res.render("createGalgo", { message: error.details[0].message })
    : next();
};

const validateUpdateGalgo = (req, res, next) => {
  const { error, value } = schemas.galgo.validate(req.body);
  error
    ? res.render("updateGalgo", { message: error.details[0].message })
    : next();
};

module.exports = { validateGalgo, validateUpdateGalgo };
