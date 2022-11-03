const Joi = require('joi');

const IdPermiso = Joi.number().integer();
const name = Joi.string();
const description = Joi.string().min(8);

const createPermisoSchema = Joi.object({
  name: name.required(),
  description: description.required()
});

const updatePermisoSchema = Joi.object({
  name,
  description,
});

const getPermisoSchema = Joi.object({
  IdPermiso: IdPermiso.required(),
});

module.exports = { createPermisoSchema, updatePermisoSchema, getPermisoSchema }
