const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const idAplicacion = Joi.number().integer();

const createRolSchema = Joi.object({
  nombre: nombre.required(),
  idAplicacion: idAplicacion.required()
});

const updateRolSchema = Joi.object({
  nombre: nombre,
  idAplicacion: idAplicacion,
});

const getRolSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRolSchema, updateRolSchema, getRolSchema }
