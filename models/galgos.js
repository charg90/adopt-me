const pool = require("./../utils/bd");
//consulta a la base de datos  para traer la informacion de los galgos
const getAll = async () => {
  const query =
    "SELECT g.id, g.edad, g.nombre,g.color,o.nombre AS organizacionNombre FROM ?? AS g JOIN ?? AS o ON g.id_organizacion = o.id WHERE g.eliminado = 0";
  const params = [process.env.T_GALGOS, process.env.T_ORGANIZACION];
  const rows = await pool.query(query, params);
  return rows;
};

//obtengo la informacion del galgo seleccionado
const getSingle = async (id) => {
  const query =
    "SELECT g.id, g.edad, g.nombre,g.color,g.descripcion,o.nombre AS organizacionNombre FROM ?? AS g JOIN ?? AS o ON g.id_organizacion = o.id WHERE g.id =  ? AND g.eliminado = 0";
  const params = [process.env.T_GALGOS, process.env.T_ORGANIZACION, id];
  return await pool.query(query, params);
};
// crea un galgo nuevo
const create = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [process.env.T_GALGOS, obj];
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

module.exports = { getAll, getSingle, create, update, del };
