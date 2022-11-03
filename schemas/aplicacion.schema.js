const Joi = require('joi');

const IdAplicacion = Joi.number().integer();
const name = Joi.string();
const estatus = Joi.number().integer();
const path = Joi.string();

const createAplicacionSchema = Joi.object({
  name: name.required(),
  estatus: estatus.required(),
  path: path.required(),
});

const updateAplicacionSchema = Joi.object({
  name,
  estatus,
  path
});

const getAplicacionSchema = Joi.object({
  IdAplicacion: IdAplicacion.required(),
});

module.exports = { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema }
