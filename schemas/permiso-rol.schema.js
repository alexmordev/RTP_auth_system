const Joi = require('joi');

const IdPermisoRol = Joi.number().integer();
const IdPermiso = Joi.number().integer();
const IdRol = Joi.number().integer();

const createPermisoRolSchema = Joi.object({
  IdPermiso: IdPermiso.required(),
  IdRol: IdRol.required()
});

const updatePermisoRolSchema = Joi.object({
  IdPermiso,
  IdRol,
});

const getPermisoRolSchema = Joi.object({
  IdPermisoRol: IdPermisoRol.required(),
});

module.exports = { createPermisoRolSchema,  updatePermisoRolSchema,  getPermisoRolSchema }
