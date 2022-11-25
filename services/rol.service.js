const boom = require('@hapi/boom');
const { Op } = require("sequelize");
// const sequelizeAUTH = require('../libs/sequelize.auth');
const {models} = require('../libs/sequelize');

class RolService {
  constructor() {}
  async create(data) {
    const {nombre, idAplicacion} = data;
    const [newRol, rol] = await models.Rol.findOrCreate({
        where: {
            [Op.and]: [{ nombre },{ idAplicacion}]
        },
        defaults: data
    });
    return (rol) ? newRol: "Una aplicación no debe tener dos Roles con el mismo";
  }
  async find() {
    const res = await models.Rol.findAll({
        include:[{association: 'PermisosRoles', attributes:['idPermiso','nombre','descripcion']}, 'aplicacion']

    });
    return res;
  }
  async findOne(id) {
    const rol  =  await models.Rol.findByPk(id,{
        include: ['aplicacion','PermisosRoles']
    });
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
