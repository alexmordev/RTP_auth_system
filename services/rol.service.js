const boom = require('@hapi/boom');

// const {models} = require('../libs/sequelize.auth');
const sequelizeAUTH = require('../libs/sequelize.auth');


class RolService {
  constructor() {}

  async create(data) {
    const newRol = await sequelizeAUTH.models.Rol.create( data )
    return newRol;
  }
  async find() {
    const res = await sequelizeAUTH.models.Rol.findAll();
    return res;
  }
  async findOne(id) {
    const rol  =  await sequelizeAUTH.models.Rol.findByPk(id);
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
