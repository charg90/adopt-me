const {
  create,
  createImage,
  update,
  updateImage,
} = require("./../models/voluntarios");
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
const updateVoluntario = async (id, body, file) => {
  console.log(body, file);
  try {
    const id_voluntario = await update(id, body);
    if (file) {
      const uid = imgFileVoluntarios(file);
      const obj = { uid };
      const idImg = await updateImage(id, obj);
      return idImg;
    } else {
      return id_voluntario;
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createVoluntario, updateVoluntario };
