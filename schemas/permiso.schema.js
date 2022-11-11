const Joi = require('joi');

const idPermiso = Joi.number().integer();
const nombre = Joi.string();
const descripcion = Joi.string().min(8);

const createPermisoSchema = Joi.object({
    nombre: nombre.required(),
    descripcion: descripcion.required()
});

const updatePermisoSchema = Joi.object({
    nombre,
    descripcion,
});

const getPermisoSchema = Joi.object({
    idPermiso
});

module.exports = {
    createPermisoSchema,
    updatePermisoSchema,
    getPermisoSchema
}
