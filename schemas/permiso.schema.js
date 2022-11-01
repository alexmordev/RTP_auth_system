const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const description = Joi.string().min(8);

const createPermisoSchema = Joi.object({
  nombre: nombre.required(),
  description: description.required()
});

const updatePermisoSchema = Joi.object({
  nombre: nombre,
  description: description,
});

const getPermisoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPermisoSchema, updatePermisoSchema, getPermisoSchema }
