const {
  create,
  createImage,
  update,
  updateImage,
} = require("./../models/galgos");
const { imgFileGalgos } = require("./../utils/fileHandler");

const createGalgo = async (body, file) => {
  try {
    const { insertId: id_galgo } = await create(body);
    const uid = imgFileGalgos(file);
    const obj = { id_galgo, uid };
    const { insertId: idImg } = await createImage(obj);
    return idImg;
  } catch (err) {
    console.log(err);
  }
};

const updateGalgo = async (id, body, file) => {
  console.log(body, file);
  try {
    const id_galgo = await update(id, body);
    if (file) {
      const uid = imgFileGalgos(file);
      const obj = { uid };
      const idImg = await updateImage(id, obj);
      return idImg;
    } else {
      return id_galgo;
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createGalgo, updateGalgo };
