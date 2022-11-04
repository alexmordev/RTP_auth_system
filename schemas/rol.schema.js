const Joi = require('joi');

const IdRol = Joi.number().integer();
const nombre = Joi.string();
const IdAplicacion = Joi.number().integer();

const createRolSchema = Joi.object({
  nombre: nombre.required(),
  IdAplicacion: IdAplicacion.required()
});

const updateRolSchema = Joi.object({
  nombre,
  IdAplicacion,
});

const getRolSchema = Joi.object({
  IdRol: IdRol.required(),
});

module.exports = { createRolSchema, updateRolSchema, getRolSchema }
