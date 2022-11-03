// const boom = require('@hapi/boom');

const { models }= require('./../libs/sequelize');

class RolPermisoService {

  constructor(){
  }
  async create(data) {
    const newRolPermiso = await models.RolPermiso.create(data);
    return newRolPermiso;
  }

  async find() {
    const rolesPermisos = await models.RolPermiso.findAll();
    return rolesPermisos;
  }

  async findOne(id) {
    const rolPermiso = await models.RolPermiso.findByPk(id);
    return rolPermiso;
  }

  async update(id, changes) {
    const rolPermiso = await this.findOne(id);
    const rta = await rolPermiso.update(changes);
    return rta;
  }

  async delete(id) {
    const rolPermiso = await this.findOne(id);
    await rolPermiso.destroy();
    return { id };
  }

}

module.exports = RolPermisoService;
