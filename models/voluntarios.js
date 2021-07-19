const pool = require("./../utils/bd");

const getAll = async () => {
  const query =
    "SELECT v.id, v.nombre, v.apellido, v.mail, v.direccion, vI.uid AS uuid FROM ?? AS v JOIN ?? AS vI ON v.id = vI.id_voluntario WHERE v.eliminado = 0";
  const params = [process.env.T_VOLUNTARIO, process.env.T_VOLUNTARIOIMG];
  return await pool.query(query, params);
};

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [process.env.T_VOLUNTARIO, obj])
    .then((response) => response)
    .catch((err) => console.log(err));

const createImage = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [process.env.T_VOLUNTARIOIMG, obj])
    .then((response) => response)
    .catch((err) => console.log(err));

const delVol = async (id) => {
  const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
  const params = [process.env.T_VOLUNTARIO, id];
  return await pool.query(query, params);
};

const delVolImg = async (id) => {
  const query = "UPDATE ?? SET eliminado = 1 WHERE id_voluntario = ?";
  const params = [process.env.T_VOLUNTARIOIMG, id];
  return await pool.query(query, params);
};

const getSingle = async (id) => {
  const query =
    "SELECT v.id, v.nombre, v.apellido, v.mail, v.direccion, vI.uid AS uuid FROM ?? AS v JOIN ?? AS vI ON v.id = vI.id_voluntario WHERE v.eliminado = 0 AND v.id = ?";
  const params = [process.env.T_VOLUNTARIO, process.env.T_VOLUNTARIOIMG, id];
  return await pool.query(query, params);
};

const update = async (id, obj) => {
  const query = " UPDATE ?? SET ? WHERE id= ?";
  const params = [process.env.T_VOLUNTARIO, obj, id];
  return await pool.query(query, params);
};

const updateImage = async (id, obj) => {
  const query = " UPDATE ?? SET ? WHERE id_voluntario= ?";
  const params = [process.env.T_VOLUNTARIOIMG, obj, id];
  return await pool.query(query, params);
};

module.exports = {
  create,
  createImage,
  getAll,
  delVol,
  delVolImg,
  getSingle,
  updateImage,
  update,
};
