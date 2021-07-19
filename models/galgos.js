const pool = require("./../utils/bd");
//consulta a la base de datos  para traer la informacion de los galgos
const getAll = async () => {
  const query =
    "SELECT g.id, g.descripcion, g.edad, g.nombre,g.color,o.nombre AS organizacionNombre, gi.uid AS uuid FROM ?? AS g JOIN ?? AS o JOIN ?? AS gi ON g.id_organizacion = o.id AND g.id = gi.id_galgo  WHERE g.eliminado = 0;";
  const params = [
    process.env.T_GALGOS,
    process.env.T_ORGANIZACION,
    process.env.T_GALGOSIMG,
  ];
  const rows = await pool.query(query, params);
  return rows;
};

//obtengo la informacion del galgo seleccionado
const getSingle = async (id) => {
  const query =
    "SELECT g.id, g.edad, g.nombre,g.color,g.descripcion,o.nombre AS organizacionNombre, gi.uid AS uuid FROM ?? AS g JOIN ?? AS o JOIN ?? AS gi  ON g.id_organizacion = o.id AND g.id = gi.id_galgo WHERE g.id =  ? AND g.eliminado = 0";
  const params = [
    process.env.T_GALGOS,
    process.env.T_ORGANIZACION,
    process.env.T_GALGOSIMG,
    id,
  ];
  return await pool.query(query, params);
};
// crea un galgo nuevo
const create = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [process.env.T_GALGOS, obj];
  return await pool.query(query, params);
};
// imagen del galgo seleccionado
const createImage = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [process.env.T_GALGOSIMG, obj];
  return await pool.query(query, params);
};

// cambia la caracteristicas del galgo seleccionado
const update = async (id, obj) => {
  const query = " UPDATE ?? SET ? WHERE id= ?";
  const params = [process.env.T_GALGOS, obj, id];
  return await pool.query(query, params);
};
//elimina el galgo seleccionado
const del = async (id) => {
  const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
  const params = [process.env.T_GALGOS, id];
  return await pool.query(query, params);
};

const updateImage = async (id, obj) => {
  const query = " UPDATE ?? SET ? WHERE id_galgo= ?";
  const params = [process.env.T_GALGOSIMG, obj, id];
  return await pool.query(query, params);
};

const delImg = async (id) => {
  const query = "UPDATE ?? SET eliminado = 1 WHERE id_galgo = ?";
  const params = [process.env.T_GALGOSIMG, id];
  return await pool.query(query, params);
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  del,
  createImage,
  delImg,
  updateImage,
};
