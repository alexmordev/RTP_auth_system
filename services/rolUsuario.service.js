const boom = require('@hapi/boom');
// const sequelizeAUTH = require('../libs/sequelize.auth');
// const sequelize = require('../libs/sequelize');
const {models} = require('../libs/sequelize');


class RolUsuarioService {
  constructor() {}
  async create(data) {
    const newRolUsuario = await models.RolUsuario.create( data )
    return newRolUsuario;
  }
  async find() {
    const rolUsuario = await models.RolUsuario.findAll();
    return rolUsuario;
  }
  async findOne(id) {
    const rolUsuario  =  await models.RolUsuario.findByPk(id);// buscar con id
    if(!rolUsuario){
      boom.notFound('Registro no encontrado');
    }
    return rolUsuario;
  }
  async update(id, changes) {
    const rolUsuario = await this.findOne(id);
    const res = await rolUsuario.update(changes);
    return res;
  }
  async delete(id) {
    const rolUsuario = await this.findOne(id);
    await rolUsuario.destroy()
    return {id};
  }
}
module.exports = RolUsuarioService;
