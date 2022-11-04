const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class RolService {
  constructor() {}

  async create(data) {
    const newRol = await models.UsuarRolUsuario.create( data )
    return newRol;
  }
  async find() {
    const res = await models.UsuarRolUsuario.findAll();
    return res;
  }
  async findOne(id) {
    const rolUsuario  =  await models.UsuarRolUsuario.findByPk(id);// buscar con id
    if(!rolUsuario){
      boom.notFound('Registro no encontrado');
    }
    return rolUsuario;
  }
  async update(id, changes) {
    const rol = await this.findOne(id);
    const res = await rol.update(changes);
    return res;
  }
  async delete(id) {
    const rol = await this.findOne(id);
    await rol.destroy()
    return {id};
  }
}

module.exports = RolService;
