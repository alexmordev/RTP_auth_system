const path = require('path');

const subirArchivo = (file, carpeta, nombreAplicacion) => {
    const extensionesValidas = ['png', 'jpg', 'jpeg']
    return new Promise((resolve, reject) => {
        const { imagen } = file;

        const nombre = imagen.name.split('.')
        const extension = nombre[nombre.length - 1];

        if (!extensionesValidas.includes(extension)) {
            return reject(`La extension ${extension} no es permitida, ${extensionesValidas}`);
        }

        const uploadPath = path.join(__dirname, '../image/', carpeta, nombreAplicacion);

        imagen.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nombreAplicacion);
        });
    });
}

module.exports = { subirArchivo }