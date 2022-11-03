const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const contraseña = Joi.string();
const estatus = Joi.string().boolean();

const createAplicacionSchema = Joi.object({
  nombre: nombre.required(),
  contraseña:contraseña.required(),
  estatus: estatus.required(),
});

const updateAplicacionSchema = Joi.object({
  nombre: nombre,
  contraseña: contraseña,
  estatus: estatus,
});

const getAplicacionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema }
