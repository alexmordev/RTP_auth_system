const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const estatus = Joi.boolean();

const createAplicacionSchema = Joi.object({
  nombre: nombre.required(),
  estatus: estatus.required()
});

const updateAplicacionSchema = Joi.object({
  nombre: nombre,
  estatus: estatus,
});

const getAplicacionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema }
