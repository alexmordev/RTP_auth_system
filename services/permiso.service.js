// const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class PermisoService {

  constructor(){
  }
  async create(data) {
    console.log(models.Permiso);
    const newPermiso = await models.Permiso.create(data);
    return newPermiso;
  }
  async find() {
    const permisos = await models.Permiso.findAll();
    return permisos;
  }
  async findOne(id) {
    const permiso = await models.Permiso.findByPk(id);
    return permiso;
  }
  async update(id, changes) {
    const permiso = await this.findOne(id);
    const rta = await permiso.update(changes);
    return rta;
  }
  async delete(id) {
    const permiso = await this.findOne(id);
    await permiso.destroy();
    return { id };
  }
}
module.exports = PermisoService;
