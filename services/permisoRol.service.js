const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require("sequelize");

class PermisoRolService {
  constructor() { }
  async create(data) {
    const arregloPermisos = data.permisos;
    const arregloResponse = [];

    for (let i = 0; i < arregloPermisos.length; i++) {
      let [newPermisoRol, created] = await models.PermisoRol.findOrCreate({

        where: {
          [Op.and]: [{ idPermiso: arregloPermisos[i] }, { idRol: data.idRol }]
        },
        defaults: {
          idPermiso: arregloPermisos[i],
          idRol: data.idRol
        },

      });
      await (created)
        ? arregloResponse.push(newPermisoRol)
        : arregloResponse.push(created)
    }
    return arregloResponse;
  }

  async find() {
    const res = await models.PermisoRol.findAll();
    return res;
  }

  async credencialAplicacion(query) {
    const permisoUsuario = await models.Rol.findAll({
      // order:['idRol'],
      include: [
        {
          as: 'RolesUsuarios',
          model: models.Usuario,
          where: {
            idUsuario: query.idUsuario
          }
        },

        {
          as: 'PermisosRoles',
          model: models.Permiso,
        },
      ],
      where: {
        idAplicacion: query.idAplicacion
      }
    });

    const mostrarData = [];
    // let encontrar  = permisoUsuario.find(element => element.id ===  permisoUsuario.PermisosRoles.dataValues[0]);
    // console.log({obj: encontrar});
    // const mostrarData1 = await models.Permiso.findAll()

    // const map = permisoUsuario.map(dat => ({ id: permisoUsuario[0]._previousDataValues.PermisosRoles[0].idPermiso }))


    permisoUsuario.forEach(data => {
      // console.log({idRol: data.idRol});
      // mostrarData.push({
      // // idRol: `${data.idRol}`,
      // })
      data.PermisosRoles.forEach( dat => {
        // console.log({PermisoRol:dat.idPermiso});
        // console.log({IdPermisoRol: dat.PermisoRol.idPermisoRol});
        mostrarData.push({
          idRol: `${data.idRol}`,
          idPermiso:  `${dat.idPermiso}`,
          IdPermisoRol:      `${dat.PermisoRol.idPermisoRol}`,
          })
      
      })

      // mostrarData.push({
      //   idRol:        `${data.idRol}`,
      //   idAplicacion: `${data.idAplicacion}`,
      //   idUsuario:    `${data.RolesUsuarios[0].idUsuario}`,
      //   idPermiso:    `${data.PermisosRoles[0].idPermiso}`,
      //   idPermisoRol: `${data.PermisosRoles[0].PermisoRol.idPermisoRol}`
      // })

    })

    return mostrarData;
  }
  
  async findOne(id) {
    const permisoRol = await models.PermisoRol.findByPk(id);// buscar con id
    if (!permisoRol) {
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
    return { id };
  }
}
module.exports = PermisoRolService;
