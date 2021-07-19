const { v4: uuid } = require("uuid");
const fs = require("fs");
const extensionesPermitidas = ["png", "jpg", "jpeg"];

//utils encargada de filtrar imagenes y transforma imagenes bytes a un archivo legible
const saveFile = (
  { mimetype, path },
  allowE,
  destFolder = `./public/images`
) => {
  try {
    const [type, extension] = mimetype.split("/");
    if (!allowE.includes(extension)) throw "Formato incorrecto";
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${fileName}`;
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    fs.unlink(path, (err) => console.log(err));
    return fileName;
  } catch (e) {
    fs.unlink(path, (err) => console.log(err));
    console.log(e);
  }
};

const imgFileVoluntarios = (file) => saveFile(file, extensionesPermitidas);
const imgFileGalgos = (file) =>
  saveFile(file, extensionesPermitidas, "./public/images/galgos");

module.exports = { imgFileVoluntarios, imgFileGalgos };
