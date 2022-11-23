const Joi = require('joi');

const idPermisoRol = Joi.number().integer();
const permisos = Joi.array();
const idRol = Joi.number().integer();

const createPermisoRolSchema = Joi.object({
    permisos: permisos.required(),
    idRol: idRol.required()
});

const updatePermisoRolSchema = Joi.object({
    permisos,
    idRol,
});

const getPermisoRolSchema = Joi.object({
    idPermisoRol
});

module.exports = {
    createPermisoRolSchema,
    updatePermisoRolSchema,
    getPermisoRolSchema
}
