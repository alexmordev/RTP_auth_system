const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class UsuarioService {
  constructor() {}

  async create(data) {
    const newUsuario = await models.Usuario.create( data )
    return newUsuario;
  }
  async find() {
    const res = await models.Usuario.findAll();
    return res;
  }
  async findOne(id) {
    const usuario  =  await models.Usuario.findByPk(id);// buscar con id
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
