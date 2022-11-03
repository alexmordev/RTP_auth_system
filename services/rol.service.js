// const boom = require('@hapi/boom');

const { models }= require('./../libs/sequelize');

class RolService {

  constructor(){
  }
  async create(data) {
    const newRol = await models.Rol.create(data);
    return newRol;
  }

  async find() {
    const roles = await models.Rol.findAll();
    return roles;
  }

  async findOne(id) {
    const rol = await models.Rol.findByPk(id);
    return rol;
  }

  async update(id, changes) {
    const rol = await this.findOne(id);
    const rta = await rol.update(changes);
    return rta;
  }

  async delete(id) {
    const rol = await this.findOne(id);
    await rol.destroy();
    return { id };
  }

}

module.exports = RolService;
