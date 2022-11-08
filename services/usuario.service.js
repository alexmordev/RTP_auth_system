const boom = require('@hapi/boom');

const sequelizeAUTH = require('../libs/sequelize.auth');
const sequelizeSGA = require('../libs/sequelize.sga');

class UsuarioService {
  constructor() {}

  async create(data) {
    console.log(sequelizeAUTH.models);
    const newUsuario = await sequelizeAUTH.models.Usuario.create( data )
    return newUsuario;
  }
  async find() {
    const res = await sequelizeAUTH.models.Usuario.findAll();
    return res;
  }
  async findTrabajadores() {
    const res = await sequelizeSGA.models.Trabajador.findAll();
    return res;
  }
  async findOne(id) {
    const usuario  =  await sequelizeAUTH.Usuario.findByPk(id);// buscar con id
    if(!usuario){
      boom.notFound('Registro no encontrado');
    }
    return usuario;
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
