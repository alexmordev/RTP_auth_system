const boom = require('@hapi/boom');
// const sequelizeAUTH = require('../libs/sequelize.auth');
const {models} = require('../libs/sequelize');

class RolService {
  constructor() {}
  async create(data) {
    const newRol = await models.Rol.create( data )
    return newRol;
  }
  async find() {
    const res = await models.Rol.findAll({
        include:[{association: 'PermisosRoles', attributes:['idPermiso','nombre','descripcion']}, 'aplicacion']

    });
    return res;
  }
  async findOne(id) {
    const rol  =  await models.Rol.findByPk(id);
    if(!rol){
      boom.notFound('Registro no encontrado');
    }
    return rol;
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
