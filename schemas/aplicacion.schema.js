const Joi = require('joi');

const idAplicacion = Joi.number().integer();
const nombre = Joi.string();
const estatus = Joi.number().integer();
const path = Joi.string();

const createAplicacionSchema = Joi.object({
    nombre: nombre.required(),
    estatus: estatus.required(),
    path: path.required(),
});

const updateAplicacionSchema = Joi.object({
    nombre,
    estatus,
    path,
});

const getAplicacionSchema = Joi.object({
    idAplicacion: idAplicacion.required(),
});

module.exports = {
    createAplicacionSchema,
    updateAplicacionSchema,
    getAplicacionSchema,
}
