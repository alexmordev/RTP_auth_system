const Joi = require('joi');

const IdUsuario = Joi.number().integer();
const NombreUsuario = Joi.string();
const constraseña = Joi.string();
const token = Joi.string();

const createAplicacionSchema = Joi.object({
  NombreUsuario: NombreUsuario.required(),
  constraseña:constraseña.required(),
  token: token.required(),
});

const updateAplicacionSchema = Joi.object({
  NombreUsuario,
  constraseña,
});

const getAplicacionSchema = Joi.object({
  IdUsuario: IdUsuario.required(),
});

module.exports = { createAplicacionSchema, updateAplicacionSchema, getAplicacionSchema }
