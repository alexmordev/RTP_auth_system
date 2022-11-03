// const boom = require('@hapi/boom');

const { models }= require('./../libs/sequelize');

class UsuarioService {

  constructor(){
  }
  async create(data) {
    const newUsuario = await models.Usuario.create(data);
    return newUsuario;
  }

  async find() {
    const usuarios = await models.Usuario.findAll();
    return usuarios;
  }

  async findOne(id) {
    const usuario = await models.Usuario.findByPk(id);
    return usuario;
  }

  async update(id, changes) {
    const usuario = await this.findOne(id);
    const rta = await usuario.update(changes);
    return rta;
  }

  async delete(id) {
    const usuario = await this.findOne(id);
    await usuario.destroy();
    return { id };
  }

}

module.exports = UsuarioService;
