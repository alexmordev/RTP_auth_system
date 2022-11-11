const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class PermisoRolService {
  constructor() {}
  async create(data) {
    const newPermisoRol = await models.PermisoRol.create( data )
    return newPermisoRol;
  }
  async find() {
    const res = await models.PermisoRol.findAll();
    return res;
  }
  async findOne(id) {
    const permisoRol  =  await models.PermisoRol.findByPk(id);// buscar con id
    if(!permisoRol){
      boom.notFound('Registro no encontrado');
    }
    return permisoRol;
  }
  async update(id, changes) {
    const permisoRol = await this.findOne(id);
    const res = await permisoRol.update(changes);
    return res;
  }
  async delete(id) {
    const permisoRol = await this.findOne(id);
    await permisoRol.destroy()
    return {id};
  }
}
module.exports = PermisoRolService;
