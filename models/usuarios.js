const pool = require("../utils/bd");

const create = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [process.env.T_USUARIO, obj];
  return await pool.query(query, params);
};

const verify = async (uid) => {
  const query = "UPDATE ?? SET habilitado = 1 where confirmacionCorreo = ?";
  const params = [process.env.T_USUARIO, uid];
  return await pool.query(query, params);
};

const auth = async (username, pass) => {
  const query =
    "SELECT * FROM ?? WHERE username = ? AND pass = ? AND habilitado = 1 AND eliminado = 0";
  const params = [process.env.T_USUARIO, username, pass];
  return await pool.query(query, params);
};

module.exports = { create, verify, auth };
