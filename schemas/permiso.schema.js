const Joi = require('joi');

const IdPermiso = Joi.number().integer();
const nombre = Joi.string();
const description = Joi.string().min(8);

const createPermisoSchema = Joi.object({
  nombre: nombre.required(),
  description: description.required()
});

const updatePermisoSchema = Joi.object({
  nombre,
  description,
});

const getPermisoSchema = Joi.object({
  IdPermiso: IdPermiso.required(),
});

module.exports = { createPermisoSchema, updatePermisoSchema, getPermisoSchema }
