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

module.exports = { create, createImage, getAll };
