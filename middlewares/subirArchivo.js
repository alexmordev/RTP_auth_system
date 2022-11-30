const path = require('path');

const subirArchivo = ( file, extensionesValidas = ['png','jpg','jpeg','gif'], carpeta, nombreAplicacion ) =>{
    return new Promise((resolve, reject) => {
        const { imagen } = file;
 
        const nombre = imagen.name.split('.')
        const extension = nombre[ nombre.length -1 ];
        
        if( !extensionesValidas.includes(extension) ){
            return reject(`La extension ${ extension} no es permitida, ${ extensionesValidas}`); 
        }

        const nombreTemp = nombreAplicacion + '.' + extension ;
        const uploadPath = path.join( __dirname, '../image/',carpeta, nombreTemp );
          
        imagen.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nombreTemp);
        });
    });
}

module.exports = { subirArchivo }