const boom = require('@hapi/boom');
const sequelizeAUTH = require('../libs/sequelize.auth');

class RolUsuarioService {
  constructor() {}
  async create(data) {
    const newRolUsuario = await sequelizeAUTH.models.RolUsuario.create( data )
    return newRolUsuario;
  }
  async find() {
    const rolUsuario = await sequelizeAUTH.models.RolUsuario.findAll();
    return rolUsuario;
  }
  async findOne(id) {
    const rolUsuario  =  await sequelizeAUTH.models.RolUsuario.findByPk(id);// buscar con id
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
