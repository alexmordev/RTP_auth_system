const Joi = require('joi');

const id = Joi.number().integer();
const idRol = Joi.number().integer();
const idUsuario = Joi.number().integer();

const createRolUsuarioSchema = Joi.object({
  idRol: idRol.required(),
  idUsuario: idUsuario.required()
});

const updateRolUsuarioSchema = Joi.object({
  idRol: idRol,
  idUsuario: idUsuario,
});

const getRolUsuarioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRolUsuarioSchema, updateRolUsuarioSchema, getRolUsuarioSchema }
