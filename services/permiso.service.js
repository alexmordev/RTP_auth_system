<<<<<<< HEAD
// const boom = require('@hapi/boom');

const { models }= require('./../libs/sequelize');

class PermisoService {

  constructor(){
  }
  async create(data) {
    const newPermiso = await models.Permiso.create(data);
    return newPermiso;
  }

  async find() {
    const permisos = await models.Permiso.findAll();
    return permisos;
  }

  async findOne(id) {
    const permiso = await models.Permiso.findByPk(id);
    return permiso;
  }

  async update(id, changes) {
    const permiso = await this.findOne(id);
    const rta = await permiso.update(changes);
    return rta;
  }

  async delete(id) {
    const permiso = await this.findOne(id);
    await permiso.destroy();
    return { id };
  }

=======
const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class PermisoService {
  constructor() {}

  async create(data) {
    const newPermiso = await models.Permiso.create( data )
    return newPermiso;
  }
  async find() {
    const res = await models.Permiso.findAll();
    return res;
  }
  async findOne(id) {
    const permiso  =  await models.Permiso.findByPk(id);// buscar con id
    if(!permiso){
      boom.notFound('Registro no encontrado');
    }
    return permiso;
  }
  async update(id, changes) {
    const permiso = await this.findOne(id);
    const res = await permiso.update(changes);
    return res;
  }
  async delete(id) {
    const permiso = await this.findOne(id);
    await permiso.destroy()
    return {id};
  }
>>>>>>> 1ac734644f1568c60fd15ada2c8e98e57112cfcb
}

module.exports = PermisoService;
