const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
// const sequelizeAUTH = require('../libs/sequelize.auth');
// const sequelizeSGA = require('../libs/sequelize.sga');
const {models} = require('../libs/sequelize');


class UsuarioService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash( data.contraseña, 13 );
    const newUsuario = await models.Usuario.create({
        ...data,
        contraseña: hash
    })
    delete newUsuario.dataValues.contraseña
    return newUsuario;
  }
  async find() {
    const res = await models.Usuario.findAll();
    return res;
  }
  async findTrabajadores() {
    // console.log(models);
    const res = await models.Trabajador.findAll();
    return res;
  }
  async findOne(id) {
    const usuario  =  await models.Usuario.findByPk(id,{
        include:[{association: 'RolesUsuarios',include: ['aplicacion','PermisosRoles']}]
    });// buscar con id
    if(!usuario){
      boom.notFound('Registro no encontrado');
    }
    return usuario;
  }
  async findByEmail(email) {
    const rta = await models.Usuario.findOne({
     where:{
      email
     }
    });
    return rta;
  }

  async update(id, changes) {
    const usuario = await this.findOne(id);
    const res = await usuario.update(changes);
    return res;
  }
  async delete(id) {
    const usuario = await this.findOne(id);
    await usuario.destroy()
    return {id};
  }
}

module.exports = UsuarioService;
