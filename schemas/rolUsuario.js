const Joi = require('joi');

const idRolUsuario = Joi.number().integer();
const idRol = Joi.array().items(Joi.number().integer());
const idUsuario = Joi.number().integer();
const createdFor = Joi.number().integer();

const createRolUsuarioSchema = Joi.object({
    idRol: idRol.required(),
    idUsuario: idUsuario.required(),
    createdFor: createdFor.required(),
});

const updateRolUsuarioSchema = Joi.object({
    idRol,
});
const getRolUsuarioSchema = Joi.object({
    idRolUsuario: idRolUsuario.required(),
});
module.exports = {
    createRolUsuarioSchema,
    updateRolUsuarioSchema,
    getRolUsuarioSchema
}
