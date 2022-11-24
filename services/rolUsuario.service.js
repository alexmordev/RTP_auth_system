const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require("sequelize");

class RolUsuarioService {
  constructor() { }
  async create(data) {
    const arregloIdRol = data.idRol;
    const arregloResponse = [];

    for (let i = 0; i < arregloIdRol.length; i++) {
      let [newPermisoRol, created] = await models.RolUsuario.findOrCreate({

        where: {
          [Op.and]: [{ idUsuario: data.idUsuario }, { idRol: data.idRol[i] }]
        },
        defaults: {
          idRol: arregloIdRol[i],
          idUsuario: data.idUsuario,
          createdFor: data.createdFor
        },

      });
      await (created)
        ? arregloResponse.push(newPermisoRol)
        : arregloResponse.push(created)
    }

    return arregloResponse;
  }
  async find() {
    const rolUsuario = await models.RolUsuario.findAll();
    return rolUsuario;
  }
  async findOne(id) {
    const rolUsuario = await models.RolUsuario.findByPk(id);// buscar con id
    if (!rolUsuario) {
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
    return { id };
  }
}
module.exports = RolUsuarioService;
