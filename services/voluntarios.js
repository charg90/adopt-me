const { create, createImage } = require("./../models/voluntarios");
const { imgFileVoluntarios } = require("./../utils/fileHandler");

const createVoluntario = async (body, file) => {
  try {
    const { insertId: id_voluntario } = await create(body);
    const uid = imgFileVoluntarios(file);
    const obj = { id_voluntario, uid };
    const { insertId: idImg } = await createImage(obj);
    return idImg;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createVoluntario };
