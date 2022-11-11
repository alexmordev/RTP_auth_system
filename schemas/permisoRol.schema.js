const Joi = require('joi');

const idPermisoRol = Joi.number().integer();
const idPermiso = Joi.number().integer();
const idRol = Joi.number().integer();

const createPermisoRolSchema = Joi.object({
    idPermiso: idPermiso.required(),
    idRol: idRol.required()
});

const updatePermisoRolSchema = Joi.object({
    idPermiso,
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
