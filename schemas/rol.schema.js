const Joi = require('joi');

const IdRol = Joi.number().integer();
const name = Joi.string();
const IdAplicacion = Joi.number().integer();

const createRolSchema = Joi.object({
  name: name.required(),
  IdAplicacion: IdAplicacion.required()
});

const updateRolSchema = Joi.object({
  name,
  IdAplicacion,
});

const getRolSchema = Joi.object({
  IdRol: IdRol.required(),
});

module.exports = { createRolSchema, updateRolSchema, getRolSchema }
