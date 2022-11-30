const boom = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
// const sequelizeAUTH = require('../libs/sequelize.auth');
const {models} = require('../libs/sequelize');
const {subirArchivo} = require('../middlewares/subirArchivo');


class AplicacionService {
  constructor() {}
  async create(data) {
    const nombreImagen = data.nombre.replaceAll(" ", "")
    data.image = nombreImagen+'.jpg'
    const newAplication = await models.Aplicacion.create( data )
    return newAplication;
  }
  async find() {
    const res = await models.Aplicacion.findAll();
    return res;
  }
  async findOne(id) {
    const aplication  =  await models.Aplicacion.findByPk(id,{
        include:['roles']
    });// buscar con id

    if(!aplication){
      boom.notFound('Registro no encontrado');
    }
    return aplication;
  }
  async update(id, changes) {
    const aplication = await this.findOne(id);
    const res = await aplication.update(changes);

    return res;
  }
  async delete(id) {
    const aplication = await this.findOne(id);
    if(aplication){
      const pathImagen = path.join( __dirname, '../image', 'aplicacion', aplication.image );
      if( fs.existsSync(pathImagen) ){
        fs.unlinkSync(pathImagen);
      }
    }
    await aplication.destroy()
    return {id};
  }

  async saveImage(image, nombreImage){

    try {
      const nombre = await subirArchivo(image,'jpg', 'aplicacion', nombreImage );
      return nombre;

    } catch (error) {
      return error;
    }
  }

}
module.exports = AplicacionService;
