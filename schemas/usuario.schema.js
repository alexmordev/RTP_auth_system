const Joi = require('joi');

const idUsuario = Joi.number().integer();
const email = Joi.string().email();
const contraseña = Joi.string();
const token = Joi.string();

const createAplicacionSchema = Joi.object({
    idUsuario:idUsuario.required(),
    email: email.required(),
    contraseña:contraseña.required(),
});

const updateAplicacionSchema = Joi.object({
    email,
    contraseña,
    token,
});

const getAplicacionSchema = Joi.object({
    idUsuario,
});

module.exports = {
    createAplicacionSchema,
    updateAplicacionSchema,
    getAplicacionSchema
}
