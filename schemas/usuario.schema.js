const Joi = require('joi');

const IdUsuario = Joi.number().integer();
const nombreUsuario = Joi.string();
const contraseña = Joi.string();
const token = Joi.string();

const createAplicacionSchema = Joi.object({
    nombreUsuario: nombreUsuario.required(),
    contraseña:contraseña.required(),
});

const updateAplicacionSchema = Joi.object({
    nombreUsuario,
    contraseña,
    token,
});

const getAplicacionSchema = Joi.object({
    IdUsuario: IdUsuario.required(),
});

module.exports = {
    createAplicacionSchema,
    updateAplicacionSchema,
    getAplicacionSchema
}
