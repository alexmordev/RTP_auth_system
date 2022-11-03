// const boom = require('@hapi/boom');

const { models }= require('./../libs/sequelize');

class AplicacionService {

  constructor(){
  }
  async create(data) {
    const newAplicacion = await models.Aplicacion.create(data);
    return newAplicacion;
  }

  async find() {
    const aplicaciones = await models.Aplicacion.findAll();
    return aplicaciones;
  }

  async findOne(id) {
    const aplicacion = await models.Aplicacion.findByPk(id);
    return aplicacion;
  }

  async update(id, changes) {
    const aplicacion = await this.findOne(id);
    const rta = await aplicacion.update(changes);
    return rta;
  }

  async delete(id) {
    const aplicacion = await this.findOne(id);
    await aplicacion.destroy();
    return { id };
  }
}

module.exports = AplicacionService;
