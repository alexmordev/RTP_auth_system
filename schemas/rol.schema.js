const Joi = require('joi');

const idRol = Joi.number().integer();
const nombre = Joi.string();
const idAplicacion = Joi.number().integer();
const fechaIncio =  Joi.date().iso();
const fechaFin =  Joi.date().iso();


const createRolSchema = Joi.object({
    nombre: nombre.required(),
    fechaIncio,
    fechaFin,
    idAplicacion: idAplicacion.required()
});

const updateRolSchema = Joi.object({
    nombre
});

const getRolSchema = Joi.object({
    idRol: idRol.required(),
});

module.exports = {
    createRolSchema,
    updateRolSchema,
    getRolSchema
}
