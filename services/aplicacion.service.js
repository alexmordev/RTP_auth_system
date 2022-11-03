const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class RolService {
  constructor() {}

  async create(data) {
    const newAplication = await models.Aplicacion.create( data )
    return newAplication;
  }
  async find() {
    const res = await models.Aplicacion.findAll();
    return res;
  }
  async findOne(id) {
    const aplication  =  await models.Aplicacion.findByPk(id);// buscar con id
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
    await aplication.destroy()
    return {id};
  }
}

module.exports = RolService;