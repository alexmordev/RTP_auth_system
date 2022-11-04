const Joi = require('joi');

const IdRolUsuario = Joi.number().integer();
const IdRol = Joi.number().integer();
const IdUsuario = Joi.number().integer();

const createRolUsuarioSchema = Joi.object({
  IdRol: IdRol.required(),
  IdUsuario: IdUsuario.required()
});

const updateRolUsuarioSchema = Joi.object({
  IdRol,
  IdUsuario,
});

const getRolUsuarioSchema = Joi.object({
  IdRolUsuario: IdRolUsuario.required(),
});

module.exports = { createRolUsuarioSchema, updateRolUsuarioSchema, getRolUsuarioSchema }
