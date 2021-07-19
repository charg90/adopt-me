const { schemas } = require("./schemas/users");

const validateUsers = (req, res, next) => {
  const { error, value } = schemas.users.validate(req.body);
  error
    ? res.render("updateOrganizacion", { message: error.details[0].message })
    : next();
};

module.exports = { validateUsers };
