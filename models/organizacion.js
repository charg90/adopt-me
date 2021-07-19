const pool = require("./../utils/bd");

const get = async () => {
  const query = "SELECT * FROM ?? WHERE habilitado = 1";
  const params = [process.env.T_ORGANIZACION];
  return await pool.query(query, params);
};

const getSingle = async (id) => {
  const query = "SELECT id,nombre,telefono,direccion  FROM ?? WHERE id = ? ";
  const params = [process.env.T_ORGANIZACION, id];
  return await pool.query(query, params);
};

const update = async (obj, id) => {
  const query = "UPDATE ?? SET ? WHERE id = ?";
  const params = [process.env.T_ORGANIZACION, obj, id];
  return await pool.query(query, params);
};

const del = async (id) => {
  const query = "UPDATE ?? SET habilitado = 0 WHERE id = ?";
  const params = [process.env.T_ORGANIZACION, id];
  return await pool.query(query, params);
};

module.exports = { get, getSingle, update, del };
