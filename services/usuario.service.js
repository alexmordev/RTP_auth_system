const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const sequelizeAUTH = require('../libs/sequelize.auth');
const sequelizeSGA = require('../libs/sequelize.sga');

class UsuarioService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash( data.contraseña, 13 );
    const newUsuario = await sequelizeAUTH.models.Usuario.create({
        ...data,
        contraseña: hash
    })
    delete newUsuario.dataValues.contraseña
    return newUsuario;
  }
  async find() {
    const res = await sequelizeAUTH.models.Usuario.findAll();
    return res;
  }
  async findTrabajadores() {
    console.log(sequelizeSGA.models);
    const res = await sequelizeSGA.models.Trabajador.findAll();
    return res;
  }
  async findOne(id) {
    const usuario  =  await sequelizeAUTH.models.Usuario.findByPk(id);// buscar con id
    if(!usuario){
      boom.notFound('Registro no encontrado');
    }
    return usuario;
  }
  async findByEmail(email) {
    const rta = await sequelizeAUTH.models.Usuario.findOne({
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
